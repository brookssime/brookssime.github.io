import React from 'react';

interface HeaderProps {
  children?: React.ReactNode;
}

export default function Header(props: HeaderProps) {
  return (
    <header className="text-center text-4xl py-2">
      {props.children}
    </header>
  );
}

