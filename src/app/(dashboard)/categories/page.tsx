
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal, Edit, Trash2, Palette } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const categories = [
  { name: "Food & Drinks", color: "bg-red-600" },
  { name: "Shopping", color: "bg-blue-600" },
  { name: "Housing", color: "bg-yellow-600" },
  { name: "Transportation", color: "bg-green-600" },
  { name: "Entertainment", color: "bg-purple-600" },
  { name: "Health", color: "bg-pink-600" },
];

export default function CategoriesPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="md:col-span-1">
        <Card>
          <CardHeader>
            <CardTitle>Add New Category</CardTitle>
            <CardDescription>Create a new category for your transactions.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="category-name">Category Name</label>
              <Input id="category-name" placeholder="e.g., Groceries" />
            </div>
            <div className="space-y-2">
              <label>Color</label>
              <div className="flex gap-2 flex-wrap">
                 <Button variant="outline" size="icon" className="h-8 w-8 rounded-full bg-red-600 hover:bg-red-700 border-2 border-transparent focus:border-ring" />
                 <Button variant="outline" size="icon" className="h-8 w-8 rounded-full bg-blue-600 hover:bg-blue-700 border-2 border-transparent focus:border-ring" />
                 <Button variant="outline" size="icon" className="h-8 w-8 rounded-full bg-yellow-600 hover:bg-yellow-700 border-2 border-transparent focus:border-ring" />
                 <Button variant="outline" size="icon" className="h-8 w-8 rounded-full bg-green-600 hover:bg-green-700 border-2 border-transparent focus:border-ring" />
                 <Button variant="outline" size="icon" className="h-8 w-8 rounded-full bg-purple-600 hover:bg-purple-700 border-2 border-transparent focus:border-ring" />
                 <Button variant="outline" size="icon" className="h-8 w-8 rounded-full bg-pink-600 hover:bg-pink-700 border-2 border-transparent focus:border-ring" />
                 <Button variant="outline" size="icon" className="h-8 w-8"><Palette className="h-4 w-4"/></Button>
              </div>
            </div>
            <Button className="w-full">Add Category</Button>
          </CardContent>
        </Card>
      </div>
      <div className="md:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle>Existing Categories</CardTitle>
            <CardDescription>View and manage your current categories.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Color</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {categories.map((category) => (
                  <TableRow key={category.name}>
                    <TableCell className="font-medium">{category.name}</TableCell>
                    <TableCell>
                      <Badge className={cn("text-white", category.color)}>{category.name}</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" />
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
