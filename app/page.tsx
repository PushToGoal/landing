import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Target, Layers, Shield } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="px-6 py-16 md:py-24 lg:py-32 max-w-4xl mx-auto">
        <div className="text-center space-y-8">
          {/* Logo and Brand */}
          <div className="space-y-2">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <svg 
                  className="w-6 h-6 text-white" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M13 10V3L4 14h7v7l9-11h-7z" 
                  />
                </svg>
              </div>
              <h1 className="text-2xl font-semibold text-primary">Push to Goal</h1>
            </div>
          </div>

          {/* Main Headline */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight">
              Платформа, которая превращает{" "}
              <span className="text-primary">поведение пользователей</span>{" "}
              в пользу для бизнеса — без скидок
            </h2>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              White-label решение для каршеринга и таксопарков. Стимулируем зарядки, смены, 
              аккуратное вождение — через миссии, статусы и награды.
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <Button 
              size="lg" 
              className="px-8 py-6 text-lg bg-primary hover:bg-primary/90 text-white rounded-xl"
            >
              Запросить пилот
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-6 py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              Почему Push to Goal
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Benefit 1 */}
            <Card className="p-8 text-center border-0 shadow-sm bg-white">
              <div className="w-16 h-16 mx-auto mb-6 bg-blue-50 rounded-xl flex items-center justify-center">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Мотивация на нужные действия
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Геймификация превращает рутинные задачи в увлекательные миссии, 
                повышая вовлеченность без дополнительных затрат на стимулирование
              </p>
            </Card>

            {/* Benefit 2 */}
            <Card className="p-8 text-center border-0 shadow-sm bg-white">
              <div className="w-16 h-16 mx-auto mb-6 bg-green-50 rounded-xl flex items-center justify-center">
                <Layers className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Гибкое внедрение без своей команды
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Готовое решение интегрируется в ваш продукт за несколько недель. 
                Настройка под бизнес-процессы без разработки с нуля
              </p>
            </Card>

            {/* Benefit 3 */}
            <Card className="p-8 text-center border-0 shadow-sm bg-white">
              <div className="w-16 h-16 mx-auto mb-6 bg-purple-50 rounded-xl flex items-center justify-center">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Поддержка РФ-инфраструктуры
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Полная локализация и соответствие российским требованиям. 
                Работаем с отечественными платежными системами и облачными сервисами
              </p>
            </Card>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16 space-y-4">
            <div className="space-x-4">
              <Button 
                size="lg" 
                className="px-8 py-6 text-lg bg-primary hover:bg-primary/90 text-white rounded-xl"
              >
                Получить презентацию
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-6 text-lg border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-xl"
              >
                Обсудить демо
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-500">
            © 2025 Push to Goal. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}