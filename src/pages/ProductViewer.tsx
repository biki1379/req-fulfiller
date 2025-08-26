import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/layout';
import Simple3DViewer from '@/components/3d/simple-3d-viewer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { products } from '@/data/products';
import { ArrowLeft, Package, Ruler, Palette } from 'lucide-react';

const ProductViewer = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Product not found</h1>
            <Link to="/gallery">
              <Button variant="outline">
                <ArrowLeft className="h-4 w-4" />
                Back to Gallery
              </Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  // Map product categories to 3D model types
  const getModelType = (category: string, name: string) => {
    if (name.toLowerCase().includes('sofa')) return 'sofa';
    if (name.toLowerCase().includes('table')) return 'table';
    if (name.toLowerCase().includes('light') || name.toLowerCase().includes('lamp')) {
      return name.toLowerCase().includes('floor') ? 'lamp' : 'light';
    }
    if (name.toLowerCase().includes('shelf')) return 'shelf';
    return 'sofa'; // default
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link to="/gallery">
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4" />
              Back to Gallery
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 3D Viewer */}
          <div className="space-y-4">
            <div className="aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-background to-muted border border-border">
              <Simple3DViewer modelType={getModelType(product.category, product.name)} />
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border">
              <h3 className="font-semibold mb-2 text-sm">3D Controls</h3>
              <div className="grid grid-cols-3 gap-2 text-xs text-muted-foreground">
                <div className="text-center p-2 bg-muted/20 rounded">
                  <div className="font-medium">Rotate</div>
                  <div>Click & Drag</div>
                </div>
                <div className="text-center p-2 bg-muted/20 rounded">
                  <div className="font-medium">Zoom</div>
                  <div>Scroll Wheel</div>
                </div>
                <div className="text-center p-2 bg-muted/20 rounded">
                  <div className="font-medium">Pan</div>
                  <div>Right Click</div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-2">
                {product.category}
              </Badge>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <p className="text-2xl font-semibold text-primary mb-4">${product.price}</p>
              <p className="text-muted-foreground leading-relaxed">{product.description}</p>
            </div>

            {/* Dimensions */}
            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Ruler className="h-5 w-5 text-primary" />
                  Dimensions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-lg font-semibold">{product.dimensions.width}cm</div>
                    <div className="text-sm text-muted-foreground">Width</div>
                  </div>
                  <div>
                    <div className="text-lg font-semibold">{product.dimensions.height}cm</div>
                    <div className="text-sm text-muted-foreground">Height</div>
                  </div>
                  <div>
                    <div className="text-lg font-semibold">{product.dimensions.depth}cm</div>
                    <div className="text-sm text-muted-foreground">Depth</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Materials */}
            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Package className="h-5 w-5 text-primary" />
                  Materials
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {product.materials.map((material) => (
                    <Badge key={material} variant="outline">
                      {material}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Colors */}
            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Palette className="h-5 w-5 text-primary" />
                  Available Colors
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <Badge key={color} variant="outline">
                      {color}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button variant="premium" size="lg" className="w-full">
                Add to Cart - ${product.price}
              </Button>
              <Button variant="outline" size="lg" className="w-full">
                Save to Wishlist
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductViewer;