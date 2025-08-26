import { Product } from '@/types/product';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Eye, Package } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 smooth-transition hover:shadow-lg">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover group-hover:scale-105 smooth-transition"
          />
          <div className="absolute top-4 left-4">
            <Badge variant="secondary" className="bg-primary/90 text-primary-foreground">
              {product.category}
            </Badge>
          </div>
          <div className="absolute top-4 right-4">
            <Badge variant="outline" className="bg-card/90 backdrop-blur-sm">
              ${product.price}
            </Badge>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2 text-foreground">{product.name}</h3>
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-3">
          {product.materials.slice(0, 2).map((material) => (
            <Badge key={material} variant="outline" className="text-xs">
              {material}
            </Badge>
          ))}
          {product.materials.length > 2 && (
            <Badge variant="outline" className="text-xs">
              +{product.materials.length - 2} more
            </Badge>
          )}
        </div>
        
        <div className="text-xs text-muted-foreground">
          {product.dimensions.width}W × {product.dimensions.height}H × {product.dimensions.depth}D cm
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 gap-2">
        <Link to={`/product/${product.id}`} className="flex-1">
          <Button variant="premium" size="sm" className="w-full">
            <Eye className="h-4 w-4" />
            View in 3D
          </Button>
        </Link>
        <Button variant="outline" size="sm">
          <Package className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;