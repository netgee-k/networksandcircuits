// src/app/api/projects/route.ts
//
// GET  /api/projects        → returns all projects (public)
// POST /api/projects        → save all projects (admin only, checks x-admin-key header)
// DELETE /api/projects?id=N → delete one project (admin only)

import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'src', 'data', 'projects.json');
const ADMIN_KEY = process.env.ADMIN_SECRET_KEY || 'changeme-set-in-env';

function readProjects() {
  try {
    const raw = fs.readFileSync(DATA_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

function writeProjects(data: unknown[]) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf-8');
}

function isAdmin(req: NextRequest) {
  return req.headers.get('x-admin-key') === ADMIN_KEY;
}

export async function GET() {
  return NextResponse.json(readProjects());
}

export async function POST(req: NextRequest) {
  if (!isAdmin(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const body = await req.json();
  writeProjects(body);
  return NextResponse.json({ ok: true });
}

export async function DELETE(req: NextRequest) {
  if (!isAdmin(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const { searchParams } = new URL(req.url);
  const id = Number(searchParams.get('id'));
  const projects = readProjects().filter((p: { id: number }) => p.id !== id);
  writeProjects(projects);
  return NextResponse.json({ ok: true });
}