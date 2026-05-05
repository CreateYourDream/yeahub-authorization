type ComingSoonPageProps = {
  title: string;
  description?: string;
};

const DEFAULT_DESCRIPTION = "Раздел находится в разработке.";

export const ComingSoonPage = ({ title, description = DEFAULT_DESCRIPTION }: ComingSoonPageProps) => {
  return (
    <section>
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  );
};
