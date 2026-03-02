/*
Arquivo: src/app/api/instagram/sync/route.ts
Objetivo: Endpoint de API do Next.js (App Router).
Guia rapido: consulte imports no topo, depois tipos/constantes, e por fim a exportacao principal.
*/

import { NextResponse } from "next/server";
import { getInstagramPosts } from "@/lib/apify";

// POST /api/instagram/sync - Sincronizar posts do Apify para o banco
export async function POST() {
  try {
    if (!process.env.APIFY_API_TOKEN) {
      return NextResponse.json(
        {
          error:
            "APIFY_API_TOKEN não configurada. Defina a variável de ambiente para habilitar sincronização do Instagram.",
        },
        { status: 503 }
      );
    }

    const { prisma } = await import("@/lib/prisma");
    if (!prisma) {
      return NextResponse.json(
        { error: "Database not configured" },
        { status: 503 }
      );
    }

    const db = prisma as any;
    const posts = await getInstagramPosts();

    if (!posts || posts.length === 0) {
      return NextResponse.json(
        { error: "Nenhum post encontrado no Apify" },
        { status: 404 }
      );
    }

    let created = 0;
    let updated = 0;
    let skipped = 0;

    for (const post of posts) {
      try {
        const existing = await db.instagramPost.findUnique({
          where: { postId: post.id },
        });

        const displayUrl = post.displayUrl || post.images?.[0] || "";

        const postData = {
          postId: post.id,
          shortCode: post.shortCode,
          type: post.type || "Image",
          url: post.url,
          displayUrl,
          videoUrl: post.videoUrl || null,
          caption: post.caption || null,
          hashtags: post.hashtags || [],
          mentions: post.mentions || [],
          likesCount: post.likesCount || 0,
          commentsCount: post.commentsCount || 0,
          videoViewCount: post.videoViewCount || null,
          dimensionsWidth: post.dimensionsWidth || null,
          dimensionsHeight: post.dimensionsHeight || null,
          timestamp: post.timestamp ? new Date(post.timestamp) : null,
        };

        if (existing) {
          await db.instagramPost.update({
            where: { postId: post.id },
            data: postData,
          });
          updated++;
        } else {
          await db.instagramPost.create({
            data: postData,
          });
          created++;
        }
      } catch (err) {
        console.error(`Erro ao processar post ${post.id}:`, err);
        skipped++;
      }
    }

    return NextResponse.json({
      success: true,
      message: `Sincronização concluída`,
      stats: {
        total: posts.length,
        created,
        updated,
        skipped,
      },
    });
  } catch (error) {
    console.error("Erro na sincronização:", error);
    return NextResponse.json(
      { error: "Erro na sincronização" },
      { status: 500 }
    );
  }
}

