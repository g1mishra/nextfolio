import { skills } from '@lib/constants';

const Skills = () => {
  return (
    <>
      {skills.map((skill) => (
        <div key={skill.name} className="flex items-center space-x-4">
          {skill.icon ? <span>{skill.icon}</span> : <span className={skill.iconClassName}></span>}
          <p className="capitalize inline">{skill.name}</p>
        </div>
      ))}
    </>
  );
};

export default Skills;
