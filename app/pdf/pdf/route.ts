import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  
  const pdfUrl = req.nextUrl.search.split('url=')[1];

  try {
    const response = await fetch(pdfUrl);

    if (!response.ok) {
      throw new Error(`Failed to fetch PDF: ${response.statusText}`);
    }

    const pdfBuffer = await response.arrayBuffer();

    return new NextResponse(Buffer.from(pdfBuffer), {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'inline; filename="your-file.pdf"'
      }
    });
  } catch (error) {
    console.error('Error fetching PDF:', error);
    return NextResponse.json({ message: 'Failed to fetch PDF' }, { status: 500 });
  }
}