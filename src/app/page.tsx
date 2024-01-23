import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export function BadgeDemo() {
  return <Badge>Badge</Badge>;
}

interface Recipe {
  id: number;
  Name: string;
  url: string;
  Description: string;
  Author: string;
  time: number;
  vegan: boolean;
}

async function getRecipes(): Promise<Recipe[]> {
  const result = await fetch("http://localhost:4000/recipes");

  await new Promise((resolve) => setTimeout(resolve, 3000));
  console.log(result.json);
  return result.json();
}

export default async function Home() {
  const recipes = await getRecipes();
  return (
    <main>
      <div className="grid grid-cols-3 gap-8">
        {recipes.map((recipe) => (
          <Card key={recipe.id} className="flex flex-col justify-between">
            <CardHeader className="flex-row gap-4 items-center">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png" //{recipe.url}
                  alt="@shadcn"
                />
                <AvatarFallback>{recipe.Name.slice(0, 2)}</AvatarFallback>
              </Avatar>

              <div>
                <CardTitle>{recipe.Name}</CardTitle>
                <CardDescription>{recipe.time} mins to cook.</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              {recipe.Description}
            </CardContent>
            <CardFooter className="justify-between">
              <Button variant="default">View Recipe</Button>

              {recipe.vegan && <Badge variant="outline">Vegan!</Badge>}
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}
