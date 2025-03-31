export interface Property {
  id: string;
  name: string;
  location: string;
  type: "resort" | "chalet" | "cottage" | "hotel" | "stadium" | "sport";
  rating: number;
  price?: number;
  image: string;
  description: string;
  friendsVisited?: number;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  count: number;
  type: Property["type"];
}
