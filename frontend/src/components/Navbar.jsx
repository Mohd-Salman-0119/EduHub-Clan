import {
  Navbar,
  Avatar,
  Button,
  Input,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Typography,
} from "@material-tailwind/react";
import {
  ArrowRightEndOnRectangleIcon,
  BellIcon,
  Cog6ToothIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";

const EduNavbar = () => {
  return (
    <Navbar
      variant="gradient"
      className="mx-auto max-w-screen-xl rounded-none p-4 shadow-xl shadow-blue-gray-900/5"
    >
      <div className="flex flex-wrap items-center justify-between gap-y-4 text-white">
        <div className="relative flex w-full gap-2 md:w-max">
          <Input
            type="search"
            color="white"
            label="Type here..."
            className="pr-20"
            containerProps={{
              className: "min-w-[288px]",
            }}
          />
          <Button
            size="sm"
            color="blue-gray"
            className="!absolute right-1 top-1 rounded"
          >
            Search
          </Button>
        </div>

        <div className="ml-auto flex gap-1 md:mr-4">
          <Menu>
            <MenuHandler>
              <Avatar
                variant="circular"
                alt="tania andrew"
                className="cursor-pointer"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              />
            </MenuHandler>
            <MenuList>
              <MenuItem className="flex items-center gap-2">
                <UserCircleIcon height={16} width={16} />
                <Typography>Profile</Typography>
              </MenuItem>
              <MenuItem className="flex items-center gap-2">
                <Cog6ToothIcon height={16} width={16} />
                <Typography>Edit Profile</Typography>
              </MenuItem>
              <MenuItem className="flex items-center gap-2">
                <ArrowRightEndOnRectangleIcon height={16} width={16} />
                <Typography>Logout</Typography>
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
    </Navbar>
  );
};

export default EduNavbar;
