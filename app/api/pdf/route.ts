import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  
  const pdfUrl = req.nextUrl.search.split('url=')[1]; // Replace with your PDF URL

  try {
    // Fetch the PDF file from the Django backend
    const response = await fetch(pdfUrl);

    if (!response.ok) {
      throw new Error(`Failed to fetch PDF: ${response.statusText}`);
    }

    // Convert the response to a buffer
    const pdfBuffer = await response.arrayBuffer();

    // Create a response with the PDF buffer
    return new NextResponse(Buffer.from(pdfBuffer), {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'inline; filename="your-file.pdf"', // Optional: Force download
      },
    });
  } catch (error) {
    console.error('Error fetching PDF:', error);
    return NextResponse.json({ message: 'Failed to fetch PDF' }, { status: 500 });
  }
}