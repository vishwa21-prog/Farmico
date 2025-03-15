
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const pages = [
    { name: "Login", path: "/login.html", description: "Authentication page for users to sign in" },
    { name: "Welcome", path: "/welcome.html", description: "Landing page with search functionality" },
    { name: "Search Results", path: "/search-results.html", description: "Displays farmer listings based on search" },
    { name: "Product Details", path: "/product-details.html", description: "Detailed information about a specific product" },
    { name: "Checkout", path: "/checkout.html", description: "Complete the purchase process" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">AgriConnect Website Preview</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A marketplace connecting farmers and buyers for agricultural residue products.
            Built with HTML and Tailwind CSS.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pages.map((page) => (
            <Card key={page.path} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader className="bg-accent/5">
                <CardTitle className="text-xl font-semibold text-gray-900">{page.name}</CardTitle>
                <CardDescription>{page.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <a href={page.path} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full">View {page.name} Page</Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
