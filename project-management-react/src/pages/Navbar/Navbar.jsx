import {
  Dialog,
  DialogHeader,
  DialogTrigger,
  DialogContent,
} from "@/components/ui/dialog";
import React from "react";
import { Button } from "@/components/ui/button";
import CreateProjectForm from "../Project/CreateProjectForm";
import {
  DropdownMenu,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { PersonIcon } from "@radix-ui/react-icons";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "@/Redux/Auth/Action";
import './Navbar.css'

const Navbar = () => {
  const { auth } = useSelector((store) => store);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => { 
    dispatch(logout());
  }
  return (
    <div className="navbarbody">
      <div className="navbar">
        <p onClick={() => navigate("/")} className="project">
          Project Management
        </p>

        <Dialog>
          <DialogTrigger>
            <Button className="newProject" variant="ghost">New Project</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>Create New Project</DialogHeader>

            <CreateProjectForm />
          </DialogContent>
        </Dialog>
        <Button className="Upgrade" onClick={() => navigate("/upgrade_plan")} variant="ghost">
          Upgrade
        </Button>
      </div>

      <div className="flex gap-3 items-center">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-2 border-gray-500"
            >
              <PersonIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <p>{auth.user?.fullName}</p>
      </div>
    </div>
  );
};

export default Navbar;
