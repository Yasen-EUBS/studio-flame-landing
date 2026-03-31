import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Plus, Minus, Trash2, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import flameSpray from '@/assets/flame-texture-spray.png';

interface Product {
  id: number;
  name: { bg: string; en: string };
  description: { bg: string; en: string };
  price: number;
  image: string;
}

interface CartItem extends Product {
  quantity: number;
}

const products: Product[] = [
  {
    id: 1,
    name: { bg: 'Flame Texture Spray', en: 'Flame Texture Spray' },
    description: { bg: 'Sea Salt & Grit — за текстурирани вълни и матов финиш. 200ml', en: 'Sea Salt & Grit — for textured, beachy waves and a matte finish. 200ml' },
    price: 24.00,
    image: flameSpray,
  },
  {
    id: 2,
    name: { bg: 'Flame Texture Spray', en: 'Flame Texture Spray' },
    description: { bg: 'Sea Salt & Grit — за текстурирани вълни и матов финиш. 200ml', en: 'Sea Salt & Grit — for textured, beachy waves and a matte finish. 200ml' },
    price: 24.00,
    image: flameSpray,
  },
  {
    id: 3,
    name: { bg: 'Flame Matte Clay', en: 'Flame Matte Clay' },
    description: { bg: 'Силна фиксация с матов ефект. Идеална за къси и средни прически. 100ml', en: 'Strong hold with matte effect. Ideal for short and medium hairstyles. 100ml' },
    price: 22.00,
    image: flameSpray,
  },
  {
    id: 4,
    name: { bg: 'Flame Pomade', en: 'Flame Pomade' },
    description: { bg: 'Класическа помада с висок блясък и средна фиксация. 100ml', en: 'Classic pomade with high shine and medium hold. 100ml' },
    price: 20.00,
    image: flameSpray,
  },
  {
    id: 5,
    name: { bg: 'Flame Beard Oil', en: 'Flame Beard Oil' },
    description: { bg: 'Масло за брада с аргано и жожоба. Омекотява и хидратира. 30ml', en: 'Beard oil with argan and jojoba. Softens and moisturizes. 30ml' },
    price: 18.00,
    image: flameSpray,
  },
  {
    id: 6,
    name: { bg: 'Flame Beard Balm', en: 'Flame Beard Balm' },
    description: { bg: 'Балсам за брада — контрол, мекота и лек блясък. 60ml', en: 'Beard balm — control, softness and subtle shine. 60ml' },
    price: 19.00,
    image: flameSpray,
  },
  {
    id: 7,
    name: { bg: 'Flame Hair Tonic', en: 'Flame Hair Tonic' },
    description: { bg: 'Тоник за коса — освежава скалпа и придава обем. 250ml', en: 'Hair tonic — refreshes scalp and adds volume. 250ml' },
    price: 16.00,
    image: flameSpray,
  },
  {
    id: 8,
    name: { bg: 'Flame Shaving Cream', en: 'Flame Shaving Cream' },
    description: { bg: 'Крем за бръснене с алое вера. Гладко бръснене без раздразнение. 150ml', en: 'Shaving cream with aloe vera. Smooth shave without irritation. 150ml' },
    price: 15.00,
    image: flameSpray,
  },
  {
    id: 9,
    name: { bg: 'Flame Aftershave Balm', en: 'Flame Aftershave Balm' },
    description: { bg: 'Балсам след бръснене — успокоява и хидратира кожата. 100ml', en: 'Aftershave balm — soothes and moisturizes skin. 100ml' },
    price: 17.00,
    image: flameSpray,
  },
  {
    id: 10,
    name: { bg: 'Flame Hair Wax', en: 'Flame Hair Wax' },
    description: { bg: 'Восък за коса със средна фиксация и естествен блясък. 100ml', en: 'Hair wax with medium hold and natural shine. 100ml' },
    price: 21.00,
    image: flameSpray,
  },
  {
    id: 11,
    name: { bg: 'Flame Shampoo', en: 'Flame Shampoo' },
    description: { bg: 'Ежедневен шампоан с ментол — дълбоко почистване и свежест. 300ml', en: 'Daily shampoo with menthol — deep cleansing and freshness. 300ml' },
    price: 14.00,
    image: flameSpray,
  },
  {
    id: 12,
    name: { bg: 'Flame Hair Spray', en: 'Flame Hair Spray' },
    description: { bg: 'Лак за коса — силна фиксация без залепване. 200ml', en: 'Hair spray — strong hold without stiffness. 200ml' },
    price: 16.00,
    image: flameSpray,
  },
];

const ShopContent = () => {
  const { language, t } = useLanguage();
  const { toast } = useToast();
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCheckout, setIsCheckout] = useState(false);
  const [formData, setFormData] = useState({ fullName: '', phone: '', delivery: '', note: '' });

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id: number, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id !== id) return item;
      const newQty = item.quantity + delta;
      return newQty > 0 ? { ...item, quantity: newQty } : item;
    }).filter(item => item.quantity > 0));
  };

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock email send — to be replaced with EmailJS
    console.log('Order submitted:', { items: cart, ...formData, total: cartTotal });
    toast({ title: t('shop.orderSuccess'), description: `${t('shop.total')}: ${cartTotal.toFixed(2)} €` });
    setCart([]);
    setIsCheckout(false);
    setFormData({ fullName: '', phone: '', delivery: '', note: '' });
  };

  return (
    <div className="container-flame">
      {/* Page Header */}
      <div className="flex items-center justify-between mb-12">
        <div>
          <a href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors mb-4 inline-block">
            {t('shop.backToShop')}
          </a>
          <h1 className="font-heading text-5xl md:text-6xl text-foreground">{t('shop.title')}</h1>
          <p className="text-muted-foreground font-body mt-2">{t('shop.subtitle')}</p>
        </div>

        {/* Cart Button */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="relative border-primary/50 hover:border-primary hover:bg-primary/10">
              <ShoppingCart className="h-5 w-5 text-primary" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-background border-border w-full sm:max-w-lg overflow-y-auto">
            <SheetHeader>
              <SheetTitle className="font-heading text-2xl text-foreground">{t('shop.cart')}</SheetTitle>
            </SheetHeader>

            {cart.length === 0 ? (
              <p className="text-muted-foreground text-center py-12 font-body">{t('shop.cartEmpty')}</p>
            ) : !isCheckout ? (
              <div className="mt-6 space-y-4">
                {cart.map(item => (
                  <div key={item.id} className="flex items-center gap-3 p-3 rounded-lg border border-border bg-card/30">
                    <img src={item.image} alt={item.name[language]} className="w-14 h-14 object-cover rounded" />
                    <div className="flex-1 min-w-0">
                      <p className="font-heading text-sm text-foreground truncate">{item.name[language]}</p>
                      <p className="text-primary text-sm font-semibold whitespace-nowrap">{item.price.toFixed(2)} €</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <button onClick={() => updateQuantity(item.id, -1)} className="p-1 rounded hover:bg-muted"><Minus className="h-3 w-3" /></button>
                      <span className="text-sm font-bold w-6 text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)} className="p-1 rounded hover:bg-muted"><Plus className="h-3 w-3" /></button>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="p-1 text-destructive hover:bg-destructive/10 rounded">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                ))}

                <div className="border-t border-border pt-4 flex items-center justify-between">
                  <span className="font-heading text-lg text-foreground">{t('shop.total')}</span>
                  <span className="font-heading text-xl text-primary whitespace-nowrap">{cartTotal.toFixed(2)} €</span>
                </div>

                <Button onClick={() => setIsCheckout(true)} className="w-full btn-flame font-heading text-lg tracking-wide">
                  {t('shop.checkout')}
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label className="text-sm text-muted-foreground font-body mb-1 block">{t('shop.fullName')}</label>
                  <Input
                    required
                    value={formData.fullName}
                    onChange={e => setFormData(p => ({ ...p, fullName: e.target.value }))}
                    className="bg-card/30 border-border"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground font-body mb-1 block">{t('shop.phone')}</label>
                  <Input
                    required
                    type="tel"
                    placeholder="+359 ..."
                    value={formData.phone}
                    onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))}
                    className="bg-card/30 border-border"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground font-body mb-1 block">{t('shop.delivery')}</label>
                  <Select value={formData.delivery} onValueChange={v => setFormData(p => ({ ...p, delivery: v }))}>
                    <SelectTrigger className="bg-card/30 border-border">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="econt">{t('shop.deliveryEcont')}</SelectItem>
                      <SelectItem value="speedy">{t('shop.deliverySpeedy')}</SelectItem>
                      <SelectItem value="home">{t('shop.deliveryHome')}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground font-body mb-1 block">{t('shop.note')}</label>
                  <Textarea
                    value={formData.note}
                    onChange={e => setFormData(p => ({ ...p, note: e.target.value }))}
                    className="bg-card/30 border-border"
                    rows={3}
                  />
                </div>

                <div className="border-t border-border pt-4 flex items-center justify-between">
                  <span className="font-heading text-lg text-foreground">{t('shop.total')}</span>
                  <span className="font-heading text-xl text-primary whitespace-nowrap">{cartTotal.toFixed(2)} €</span>
                </div>

                <div className="flex gap-2">
                  <Button type="button" variant="outline" onClick={() => setIsCheckout(false)} className="flex-1">
                    ←
                  </Button>
                  <Button type="submit" className="flex-1 btn-flame font-heading text-lg tracking-wide">
                    {t('shop.checkout')}
                  </Button>
                </div>
              </form>
            )}
          </SheetContent>
        </Sheet>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            whileHover={{ scale: 1.03 }}
            className="group rounded-xl border border-border bg-card/20 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-primary/60 hover:shadow-[0_0_20px_hsl(var(--primary)/0.15)]"
          >
            <div className="aspect-square overflow-hidden bg-black/30">
              <img
                src={product.image}
                alt={product.name[language]}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-4">
              <h3 className="font-heading text-lg text-foreground mb-1">{product.name[language]}</h3>
              <p className="text-muted-foreground text-xs font-body mb-3 line-clamp-2">{product.description[language]}</p>
              <div className="flex items-center justify-between">
                <span className="font-heading text-xl text-primary whitespace-nowrap">{product.price.toFixed(2)} €</span>
                <Button
                  size="sm"
                  onClick={() => addToCart(product)}
                  className="btn-flame text-xs font-heading tracking-wide"
                >
                  {t('shop.addToCart')}
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ShopContent;
