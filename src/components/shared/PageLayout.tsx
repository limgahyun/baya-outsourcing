import React from "react";

type PageLayoutProps = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  footerText?: string;
};

export default function PageLayout({
  title,
  subtitle,
  children,
  footerText,
}: PageLayoutProps) {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl space-y-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-gmarket font-bold mb-4 text-blue-900">
          {title}
        </h1>
        <p className="text-xl text-gray-600">{subtitle}</p>
      </div>

      {children}

      <div className="text-center mt-8">
        <p className="text-sm text-gray-500">{footerText}</p>
      </div>
    </div>
  );
}
