"use server";

export default async function getExhibitions() {
  
  const apiKey = process.env.HAR_API_KEY;
  
  const response = await fetch("https://api.harvardartmuseums.org/exhibition?q=primaryimageurl:*+AND+shortdescription:*&apikey=" + apiKey);
  const data = await response.json();
  return data;
}