const API_URL=import.meta.env.VITE_API_URL??'/api/v1';
export type Product={id:string;name:string;slug:string;category:string;description:string;price:number;stock:number;status:'ACTIVE'|'DRAFT'|'ARCHIVED'};
export async function getProducts():Promise<Product[]>{const response=await fetch(`${API_URL}/products`);if(!response.ok)throw new Error('Catalogue indisponible');return response.json()}

