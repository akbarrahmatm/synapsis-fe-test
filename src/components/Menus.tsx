import { Button } from "antd";
import Link from "next/link";

const items = [
  {
    label: "Register",
    route: "/auth/register",
  },
  {
    label: "Login",
    route: "/auth/login",
  },
];

const Menus = () => {
  return (
    <>
      <ul className="flex gap-2 justify-end">
        {items.map((item, index) => (
          <li key={index}>
            <Button color="primary">
              <Link className="font-medium" href={item.route}>
                {item.label}
              </Link>
            </Button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Menus;
