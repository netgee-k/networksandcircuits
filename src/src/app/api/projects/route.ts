// src/app/api/projects/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { supabase, supabaseAdmin } from '@/lib/supabase';

const ADMIN_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!;

function isAdmin(req: NextRequest) {
  return req.headers.get('x-admin-key') === ADMIN_KEY;
}

// GET /api/projects — public, reads from Supabase
export async function GET() {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('position', { ascending: true })
    .order('created_at', { ascending: true });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

// POST /api/projects — admin only, upsert a single project
export async function POST(req: NextRequest) {
  if (!isAdmin(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const body = await req.json();
  const { id, ...fields } = body;

  let result;
  if (id) {
    result = await supabaseAdmin.from('projects').update(fields).eq('id', id).select().single();
  } else {
    result = await supabaseAdmin.from('projects').insert(fields).select().single();
  }

  if (result.error) return NextResponse.json({ error: result.error.message }, { status: 500 });
  return NextResponse.json(result.data);
}

// DELETE /api/projects?id=N — admin only
export async function DELETE(req: NextRequest) {
  if (!isAdmin(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const id = new URL(req.url).searchParams.get('id');
  if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 });

  const { error } = await supabaseAdmin.from('projects').delete().eq('id', id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}

// PATCH /api/projects — admin only, reorder (pass array of {id, position})
export async function PATCH(req: NextRequest) {
  if (!isAdmin(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const updates: { id: number; position: number }[] = await req.json();
  const results = await Promise.all(
    updates.map(({ id, position }) =>
      supabaseAdmin.from('projects').update({ position }).eq('id', id)
    )
  );

  const failed = results.find(r => r.error);
  if (failed?.error) return NextResponse.json({ error: failed.error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
