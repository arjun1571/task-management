import OverviewCart from "@/src/components/module/OverviewCart/OverviewCart";

const ProjectsOverview = () => {
  const navLinkData: any[] = [
    {
      id: 1,
      name: "Projects Overview",
      title: "project-overview",
      description: "donut_small",
    },
    {
      id: 2,
      name: "Task Management",
      title: "task-management",
      description: "task",
    },
    { id: 3, name: "Demo", title: "demo", description: "layers" },
  ];
  return (
    <div className="grid grid-cols-2 gap-5">
      {navLinkData?.map((data: any) => (
        <OverviewCart key={data?.id} data={data} />
      ))}
    </div>
  );
};

export default ProjectsOverview;
