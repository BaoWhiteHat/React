import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { DotsVerticalIcon, PersonIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import UserList from "./UserList";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteIssue } from "@/Redux/Issue/Action";


const IssueCard = ({item, projectId}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleIssueDelete = () => { 
    dispatch(deleteIssue(item.id));
  }

  return (
    <Card className="rounded-md py-1 pb-2">
      <CardHeader className="py-0 pb-1">
        <div className="flex justify-between items-center">
          <CardTitle className="cursor-pointer" onClick={() => navigate(`/project/
            ${projectId}/issue/${item.id}`)}>{item.title}</CardTitle>

          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button className="rounded-full" size="icon" variant="ghost">
                <DotsVerticalIcon />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
              <DropdownMenuItem>In Progress</DropdownMenuItem>
              <DropdownMenuItem>Done</DropdownMenuItem>
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem onClick={handleIssueDelete} >Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent className="py-0">
        <div className="flex items-center justify-between">
          <p>FBP - {1}</p>

          {/* If a dropdown is needed here, add DropdownMenuContent, otherwise remove */}
          <DropdownMenu className="w-[30rem] border border-red-400">
            <DropdownMenuTrigger>
                          <Button
                size="icon"
                              className="bg-gray-900 hover:text-black text-white rounded-full">
                <Avatar>
                  <AvatarFallback>
                    <PersonIcon />
                  </AvatarFallback>
                </Avatar>
              </Button>
                      </DropdownMenuTrigger>
                      
                      <DropdownMenuContent>
                          <UserList issueDetails={item}/>
                      </DropdownMenuContent>

            {/* Add DropdownMenuContent here if you want this dropdown to have options */}
          </DropdownMenu>
        </div>
      </CardContent>
    </Card>
  );
};

export default IssueCard;
