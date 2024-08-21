const Pricing = () => {
    const plans = [
      { name: 'Basic', price: '$9.99', features: ['5 AI Agents', 'Basic Automation', 'Email Support'] },
      { name: 'Pro', price: '$24.99', features: ['Unlimited AI Agents', 'Advanced Automation', 'Priority Support'] },
      { name: 'Enterprise', price: 'Custom', features: ['Custom Solutions', 'Dedicated Account Manager', '24/7 Support'] },
    ]
  
    return (
        <section id="pricing" className="py-20 bg-white text-dark">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
                <p className="text-4xl font-bold mb-6">{plan.price}</p>
                <ul className="mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="mb-2">✓ {feature}</li>
                  ))}
                </ul>
                <button className="w-full bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition-colors duration-300">
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default Pricing