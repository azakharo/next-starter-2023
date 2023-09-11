import { cookies, headers } from 'next/headers';
import { NextResponse } from 'next/server';

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } },
) {
  const id = params.id;

  const headerList = headers();
  const type = headerList.get('Content-Type');

  const cookiesList = cookies();
  const coo2 = cookiesList.get('Cookie_2')?.value;

  // logic delete post
  // redirect('/blog')

  return NextResponse.json({ id, type, coo2 });
}
