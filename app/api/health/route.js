import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('cityoil');
    await db.admin().ping();

    return NextResponse.json({
      status: 'OK',
      timestamp: new Date().toISOString(),
      mongodb: 'connected',
    });
  } catch (error) {
    return NextResponse.json(
      { status: 'ERROR', error: error.message },
      { status: 500 },
    );
  }
}
