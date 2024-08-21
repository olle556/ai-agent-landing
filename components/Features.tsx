const Features = () => {
    const features = [
      { title: 'Task Automation', description: 'Automate repetitive tasks with ease' },
      { title: 'Customizable Workflows', description: 'Create custom workflows tailored to your needs' },
      { title: 'Integration Ready', description: 'Seamlessly integrate with your existing tools' },
      { title: 'AI-Powered', description: 'Leverage advanced AI to optimize your processes' },
    ]
  
    return (
        <section id="features" className="py-20 bg-light text-dark">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default Features