interface ISkill {
    cor: string;
    title: string;
}

export const Skill = ({ cor, title } : ISkill) => {
    return (
        <div className={`bg-${cor} dark:bg-${cor}Dark w-24 flex items-center justify-center rounded-md px-3 py-1`}>
            <h1 className="text-fontText dark:text-fontTextDark">{title}</h1>
        </div>
    )
}