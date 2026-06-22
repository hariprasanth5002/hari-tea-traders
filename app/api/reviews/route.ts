import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  const apiKey = process.env.GOOGLE_API_KEY;
  const placeId = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return NextResponse.json(
      { error: 'Google API Key or Place ID missing' },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}`,
      {
        headers: {
          'X-Goog-Api-Key': apiKey,
          'X-Goog-FieldMask': 'displayName,rating,userRatingCount,reviews,reviews.rating,reviews.relativePublishTimeDescription,reviews.text,reviews.authorAttribution,googleMapsLinks',
        },
        cache: 'no-store',
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Google Places API HTTP error:', response.status, errorText);
      return NextResponse.json(
        { error: `Google API returned status ${response.status}` },
        { status: 500 }
      );
    }

    const data = await response.json();

    if (data.error) {
      console.error('Google Places API (New) error:', JSON.stringify(data.error));
      return NextResponse.json(
        { error: data.error.message || 'Failed to fetch reviews from Google API' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      displayName: data.displayName || { text: 'Hari Tea Traders' },
      rating: data.rating ?? null,
      userRatingCount: data.userRatingCount || 0,
      reviews: data.reviews || [],
      googleMapsLinks: data.googleMapsLinks || null,
    });
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
