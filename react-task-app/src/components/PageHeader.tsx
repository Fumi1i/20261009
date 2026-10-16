// 親から受け取る値の型
type PageHeaderProps = {
  title: string;
};


export default function PageHeader({ title }: PageHeaderProps) {
  return <h1>{title}</h1>;
}
