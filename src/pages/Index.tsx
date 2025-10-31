import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('main');

  const premiumBrands = [
    { name: 'Ray-Ban', category: 'Оправы и солнцезащитные', icon: 'Glasses' },
    { name: 'Prada', category: 'Люкс коллекция', icon: 'Crown' },
    { name: 'Gucci', category: 'Дизайнерские оправы', icon: 'Gem' },
    { name: 'Tom Ford', category: 'Премиум линия', icon: 'Award' },
    { name: 'Dior', category: 'Haute Couture', icon: 'Sparkles' },
    { name: 'Cartier', category: 'Ювелирная оптика', icon: 'Crown' }
  ];

  const services = [
    { title: 'Проверка зрения', description: 'Комплексная диагностика на современном оборудовании', icon: 'Eye' },
    { title: 'Подбор линз', description: 'Индивидуальный подбор контактных и очковых линз', icon: 'ScanEye' },
    { title: 'Ремонт оправ', description: 'Профессиональный ремонт и регулировка оправ', icon: 'Wrench' },
    { title: 'Консультация', description: 'Бесплатная консультация врача-офтальмолога', icon: 'MessageCircle' }
  ];

  const catalog = [
    { name: 'Солнцезащитные очки', price: 'от 15 000 ₽', badge: 'Новинка' },
    { name: 'Оправы премиум', price: 'от 25 000 ₽', badge: 'Хит' },
    { name: 'Линзы Carl Zeiss', price: 'от 8 000 ₽', badge: '' },
    { name: 'Спортивные очки', price: 'от 12 000 ₽', badge: '' },
    { name: 'Детская оптика', price: 'от 6 000 ₽', badge: '' },
    { name: 'Аксессуары', price: 'от 1 500 ₽', badge: 'Акция' }
  ];

  const promotions = [
    { title: 'Скидка 20% на вторую пару', description: 'При покупке двух пар очков', validUntil: '31 декабря' },
    { title: 'Бесплатная проверка зрения', description: 'При покупке оправы премиум-класса', validUntil: '15 ноября' },
    { title: 'Trade-in старых очков', description: 'Сдай старые очки и получи скидку до 5000₽', validUntil: '30 ноября' }
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-muted/30">
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Glasses" className="text-primary" size={32} />
              <span className="text-2xl font-display font-bold text-primary">Оптика-Люкс</span>
            </div>
            <div className="hidden md:flex gap-6">
              {['Главная', 'Каталог', 'Бренды', 'Услуги', 'Акции', 'О компании', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="text-foreground/70 hover:text-primary transition-colors font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
            <Button onClick={() => scrollToSection('консультация')}>
              <Icon name="Phone" size={18} className="mr-2" />
              Записаться
            </Button>
          </nav>
        </div>
      </header>

      <section id="главная" className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-primary/10 text-primary border-primary/20">Премиум оптика с 2010 года</Badge>
              <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground leading-tight">
                Видеть мир<br />
                <span className="text-primary">в новом свете</span>
              </h1>
              <p className="text-xl text-foreground/70">
                Эксклюзивные коллекции мировых брендов оправ и линз. Профессиональный подбор и забота о вашем зрении.
              </p>
              <div className="flex gap-4">
                <Button size="lg" onClick={() => scrollToSection('каталог')}>
                  <Icon name="ShoppingBag" size={20} className="mr-2" />
                  Смотреть каталог
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('консультация')}>
                  Консультация
                </Button>
              </div>
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-3xl font-display font-bold text-primary">500+</div>
                  <div className="text-sm text-foreground/60">Довольных клиентов</div>
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-primary">50+</div>
                  <div className="text-sm text-foreground/60">Премиум брендов</div>
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-primary">15</div>
                  <div className="text-sm text-foreground/60">Лет опыта</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center animate-scale-in">
                <Icon name="Glasses" size={200} className="text-primary/40" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="бренды" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Premium Collection</Badge>
            <h2 className="text-4xl font-display font-bold mb-4">Эксклюзивные бренды</h2>
            <p className="text-xl text-foreground/70">Только оригинальная продукция от ведущих мировых производителей</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {premiumBrands.map((brand, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon name={brand.icon as any} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-display">{brand.name}</CardTitle>
                  <CardDescription className="text-base">{brand.category}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="каталог" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center mb-12">Каталог продукции</h2>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-4 mb-8">
              <TabsTrigger value="all">Все товары</TabsTrigger>
              <TabsTrigger value="frames">Оправы</TabsTrigger>
              <TabsTrigger value="sun">Солнцезащитные</TabsTrigger>
              <TabsTrigger value="lenses">Линзы</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="space-y-4">
              <div className="grid md:grid-cols-3 gap-6">
                {catalog.map((item, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="aspect-square bg-muted/50 rounded-lg mb-4 flex items-center justify-center">
                        <Icon name="Glasses" size={80} className="text-primary/40" />
                      </div>
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-display font-semibold text-lg">{item.name}</h3>
                        {item.badge && (
                          <Badge variant="secondary" className="bg-accent text-white">{item.badge}</Badge>
                        )}
                      </div>
                      <p className="text-primary font-semibold text-xl mb-4">{item.price}</p>
                      <Button className="w-full">Подробнее</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="frames">
              <p className="text-center text-foreground/60">Раздел в разработке</p>
            </TabsContent>
            <TabsContent value="sun">
              <p className="text-center text-foreground/60">Раздел в разработке</p>
            </TabsContent>
            <TabsContent value="lenses">
              <p className="text-center text-foreground/60">Раздел в разработке</p>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="услуги" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center mb-4">Наши услуги</h2>
          <p className="text-center text-foreground/70 mb-12 text-lg">Полный спектр услуг для вашего комфортного зрения</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon as any} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="font-display">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="акции" className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center mb-12">Актуальные акции</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {promotions.map((promo, index) => (
              <Card key={index} className="border-2 border-primary/20">
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-accent text-white">До {promo.validUntil}</Badge>
                  <CardTitle className="font-display text-xl">{promo.title}</CardTitle>
                  <CardDescription className="text-base">{promo.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">Узнать подробнее</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="о-компании" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-display font-bold mb-6">О компании</h2>
            <p className="text-lg text-foreground/70 mb-6">
              Оптика-Люкс — это ведущий салон премиальной оптики с 15-летней историей. Мы специализируемся на эксклюзивных коллекциях мировых брендов и предоставляем полный спектр услуг по подбору и уходу за очками.
            </p>
            <p className="text-lg text-foreground/70 mb-8">
              Наша команда профессиональных оптометристов использует современное оборудование для точной диагностики зрения и индивидуального подбора оптических решений.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <Icon name="Award" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="font-display font-semibold mb-2">Качество</h3>
                <p className="text-sm text-foreground/60">Только оригинальная продукция</p>
              </div>
              <div>
                <Icon name="Users" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="font-display font-semibold mb-2">Экспертность</h3>
                <p className="text-sm text-foreground/60">Квалифицированные специалисты</p>
              </div>
              <div>
                <Icon name="Heart" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="font-display font-semibold mb-2">Забота</h3>
                <p className="text-sm text-foreground/60">Индивидуальный подход</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="консультация" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-display">Записаться на консультацию</CardTitle>
                <CardDescription className="text-base">Оставьте заявку и мы свяжемся с вами в ближайшее время</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Спасибо! Мы свяжемся с вами.'); }}>
                  <div>
                    <Input placeholder="Ваше имя" required />
                  </div>
                  <div>
                    <Input type="tel" placeholder="Телефон" required />
                  </div>
                  <div>
                    <Input type="email" placeholder="Email" />
                  </div>
                  <div>
                    <Textarea placeholder="Комментарий или вопрос" rows={4} />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    <Icon name="Send" size={18} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="контакты" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center mb-12">Контакты</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex gap-4">
                <Icon name="MapPin" className="text-primary mt-1" size={24} />
                <div>
                  <h3 className="font-display font-semibold mb-1">Адрес</h3>
                  <p className="text-foreground/70">г. Москва, ул. Тверская, д. 15</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Icon name="Phone" className="text-primary mt-1" size={24} />
                <div>
                  <h3 className="font-display font-semibold mb-1">Телефон</h3>
                  <p className="text-foreground/70">+7 (495) 123-45-67</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Icon name="Mail" className="text-primary mt-1" size={24} />
                <div>
                  <h3 className="font-display font-semibold mb-1">Email</h3>
                  <p className="text-foreground/70">info@optika-lux.ru</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Icon name="Clock" className="text-primary mt-1" size={24} />
                <div>
                  <h3 className="font-display font-semibold mb-1">Режим работы</h3>
                  <p className="text-foreground/70">Пн-Пт: 10:00 - 20:00</p>
                  <p className="text-foreground/70">Сб-Вс: 11:00 - 19:00</p>
                </div>
              </div>
            </div>
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <Icon name="Map" size={80} className="text-primary/40" />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Glasses" size={24} />
                <span className="font-display font-bold text-xl">Оптика-Люкс</span>
              </div>
              <p className="text-white/70 text-sm">Премиальная оптика и забота о вашем зрении с 2010 года</p>
            </div>
            <div>
              <h4 className="font-display font-semibold mb-4">Навигация</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><button onClick={() => scrollToSection('главная')}>Главная</button></li>
                <li><button onClick={() => scrollToSection('каталог')}>Каталог</button></li>
                <li><button onClick={() => scrollToSection('услуги')}>Услуги</button></li>
                <li><button onClick={() => scrollToSection('акции')}>Акции</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><button onClick={() => scrollToSection('о-компании')}>О компании</button></li>
                <li><button onClick={() => scrollToSection('контакты')}>Контакты</button></li>
                <li>Доставка и оплата</li>
                <li>Гарантии</li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-semibold mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <Icon name="Instagram" size={24} className="cursor-pointer hover:text-primary transition-colors" />
                <Icon name="Facebook" size={24} className="cursor-pointer hover:text-primary transition-colors" />
                <Icon name="Youtube" size={24} className="cursor-pointer hover:text-primary transition-colors" />
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/60">
            © 2024 Оптика-Люкс. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;