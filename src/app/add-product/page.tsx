import { prisma } from "@/lib/db/prisma";
import { redirect } from "next/navigation";
import FormSubmitButton from "../components/FormSubmitButton";
import ProductCard from "../components/ProductCard";

// Overriding the metadata for this page by changing the title
export const metadata = {
    title: 'Add Product - Konespo'
}

async function addProduct(formData: FormData) {
    "use server";
    console.log("Rain")
    const name = formData.get("name")?.toString();
    const description = formData.get("description")?.toString();
    const imageUrl = formData.get("imageUrl")?.toString();
    // zero is the fallback value incase price field is empty or undefined
    const price = Number(formData.get("price") || 0);
 
    if(!name || !description || !imageUrl || !price) {
        throw Error("Missing required fields");
    }
    await prisma.product.create({
        data: {name,description,imageUrl,price},
    });
    redirect("/");

}

export default function AddProductPage() {
//   Use Ctrl+D for margin selection in vs code so that u can change multiple mb-3's to mb-2's
// In tailwind no style gets applied by default, we have to use some class names to get the desired style that we want  
return (
    <div>
      <h1 className="mb-3 text-lg font-bold">Add Product</h1>
      <form action={addProduct}>
        {/* Here the input and the input-bordered classes are coming from daisy UI, where multiple tailwind css classes are combined together */}
        <input
          required
          name="name"
          placeholder="Name"
          className="input input-bordered mb-3 w-full"
        />
        <textarea
        required
        name="description"
        placeholder="Description"
        className="textarea textarea-bordered mb-3 w-full"
        />
        <input
          required
          name="imageUrl"
          placeholder="Image URL"
          type="url"
          className="input input-bordered mb-3 w-full"
        />
        <input
          required
          name="price"
          placeholder="Price"
          type="number"
          className="input input-bordered mb-3 w-full"
        />
        <FormSubmitButton className="btn-block">Add Product</FormSubmitButton>
      </form>
    </div>
  );
}


