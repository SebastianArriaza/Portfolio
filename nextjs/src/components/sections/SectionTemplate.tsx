type SectionTemplateProps = {
  title?: string;
  customTitle?: string;
  children: React.ReactNode;
};

function SectionTemplate({
  title,
  customTitle,
  children,
}: SectionTemplateProps) {
  const titleOrCustomTitle = customTitle || title;

  return (
    <section className="flex flex-col w-full h-screen backdrop-blur-3xl rounded-xl z-10 pt-[15vh] lg:pt-[20vh]" id={title ? title.toLowerCase() : ''}>
      <div className="flex text-5xl px-5 pb-[5vh] lg:pb-[0vh] lg:px-[4.4rem]">
        <h2>{titleOrCustomTitle}</h2>
      </div>
      <div className="relative h-[80vh] mb-px p-8 border rounded-2xl bg-zinc-950 overflow-hidden lg:m-[4.4rem]">
        {children}
      </div>
    </section>
  );
}

export default SectionTemplate;
