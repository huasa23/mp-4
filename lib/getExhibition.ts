"use server";

export default async function getExhibition(id: string) {
  
  const apiKey = process.env.HAR_API_KEY;
  
  const response = await fetch(`https://api.harvardartmuseums.org/exhibition/${id}?apikey=${apiKey}`);
  const data = await response.json();
  return data;
}