import ListAltIcon from "@mui/icons-material/ListAlt";
import LockIcon from "@mui/icons-material/Lock";
import GroupIcon from "@mui/icons-material/Group";
import { PiuList } from "./components/Admin/PIUs/PiuList";
import { ZoneList } from "./components/Admin/Zones/ZonesList";
import { Viewuser } from "./components/Admin/Users/ViewUser";
import { ChangePassword } from "./components/Admin/ChangePassword";
import { ProgressMonitoring } from "./components/ProgressMonitoring/ProgressMonitoring";
import LoopIcon from '@mui/icons-material/Loop';
import { ProgressMonitoringList } from "./components/ProgressMonitoring/ProgressMonitoringList";
import { ProgressDashboard } from "./components/ProgressMonitoring/ProgressDashboard";
import DashboardIcon from '@mui/icons-material/Dashboard';

export const UserFormData = [
  {
    id: 1,
    title: "Scheme Name",
    name: "schemeName",
    placeHolder: "Scheme_001",
    required: true,
    type: "input",
    size: 6,
  },
  {
    id: 2,
    title: "Scheme ID",
    name: "schemeID",
    placeHolder: "Sch10",
    required: true,
    type: "input",
    size: 6,
  },
  {
    id: 3,
    title: "Zone Code",
    name: "zoneCode",
    placeHolder: "ZONE_01",
    required: true,
    type: "select",
    size: 6,
  },
  {
    id: 4,
    title: "Zone Name",
    name: "zoneName",
    placeHolder: "ujjain",
    required: true,
    type: "select",
    size: 6,
  },
  {
    id: 5,
    title: "PIU_Code",
    name: "piuCode",
    placeHolder: "PIU_01",
    required: true,
    type: "select",
    size: 6,
  },
  {
    id: 6,
    title: "PIU_Name",
    name: "piuName",
    placeHolder: "Ujjain",
    required: true,
    type: "select",
    size: 6,
  },
  {
    id: 7,
    title: "S.No._2",
    name: "sNo",
    placeHolder: "1",
    required: true,
    type: "select",
    size: 6,
  },
  {
    id: 8,
    title: "District",
    name: "district",
    placeHolder: "bhopal",
    required: true,
    type: "input",
    size: 6,
  },
  {
    id: 9,
    title: "Scheme Name",
    name: "schemeName",
    placeHolder: "Gandhi Sagar 2",
    required: true,
    type: "input",
    size: 6,
  },
  {
    id: 10,
    title: "Villages",
    name: "villages",
    placeHolder: "village name",
    required: true,
    type: "input",
    size: 6,
  },
  {
    id: 11,
    title: "Amount(Rs Cr.)",
    name: "amount",
    placeHolder: "123.00",
    required: true,
    type: "input",
    size: 6,
  },
  {
    id: 12,
    title: "Scheme Status",
    name: "schemeStatus",
    required: true,
    type: "select",
    size: 6,
  },
  {
    id: 13,
    title: "Contractor Name",
    name: "contractorName",
    placeHolder: "Name..",
    required: true,
    type: "input",
    size: 6,
  },
];

export const userCredentialsData = [
  {
    id: 1,
    title: "Username",
    name: "username",
    placeHolder: "Enter Username",
    required: true,
    type: "input",
    fieldType: "text",
    size: 6,
  },
  {
    id: 2,
    title: "Password",
    name: "password",
    required: true,
    placeHolder: "Enter Password",
    type: "input",
    fieldType: "password",
    size: 6,
  },
  {
    id: 3,
    title: "PIU_Code",
    name: "piu",
    placeHolder: "piu_001",
    required: true,
    type: "select",
    size: 6,
  },
];

export const statusOption = [
  {
    id: 1,
    title: "Execution",
    value: "Execution",
  },
  {
    id: 2,
    title: "O&M",
    value: "O&M",
  },
];

export const snoOptions = [
  {
    id: 1,
    title: "1",
    value: 1,
  },
  {
    id: 2,
    title: "2",
    value: 2,
  },
  {
    id: 3,
    title: "3",
    value: 3,
  },
  {
    id: 4,
    title: "4",
    value: 4,
  },
  {
    id: 5,
    title: "5",
    value: 5,
  },
];

export const piuHeaders = [
  {
    id: 1,
    label: "ID",
    valueAccessor: "id",
    name: "id",
  },
  {
    id: 2,
    title: "PiuId",
    label: "Piu Id",
    valueAccessor: "piuId",
    placeHolder: "Enter Piu Name",
    name: "piuId",
    type: "input",
    size: 6,
  },
  {
    id: 3,
    title: "PiuName",
    label: "Piu Name",
    valueAccessor: "piuName",
    name: "piuName",
    placeHolder: "Enter Piu Id",
    type: "input",
    size: 6,
  },
];

export const zoneHeaders = [
  {
    id: 1,
    label: "ID",
    valueAccessor: "id",
    name: "id",
  },
  {
    id: 2,
    title: "ZoneId",
    valueAccessor: "zoneId",
    name: "zoneId",
    label: "Zone Id",
    type: "input",
    placeHolder: "Enter Zone Name",
    size: 6,
  },
  {
    id: 3,
    title: "ZoneName",
    valueAccessor: "zoneName",
    name: "zoneName",
    label: "Zone Name",
    type: "input",
    placeHolder: "Enter Zone Id",
    size: 6,
  },
];
export const userHeaders = [
  {
    id: 1,
    label: "ID",
    valueAccessor: "id",
    name: "id",
  },
  {
    id: 2,
    label: "Username",
    valueAccessor: "username",
    name: "username",
  },
  {
    id: 3,
    label: "Password",
    valueAccessor: "password",
    name: "password",
  },
  {
    id: 4,
    label: "Piu",
    valueAccessor: "piu",
    name: "piu",
  },
];
export const sidebarValueAdmin = [
  {
    id: 0,
    component: <PiuList />,
  },
  {
    id: 1,
    component: <ZoneList />,
  },
  {
    id: 2,
    component: <Viewuser />,
  },
  {
    id: 3,
    component: <ChangePassword />,
  },
  {
    id: 4,
    component: <ProgressMonitoringList/>,
  },
  {
    id: 5,
    component: <ProgressDashboard/>,
  },
];

export const sidebarMenuAdmin = [
  {
    id: 1,
    label: "Pius",
    index: 0,
    icon: <ListAltIcon />,
  },
  {
    id: 2,
    label: "Zones",
    index: 1,
    icon: <ListAltIcon />,
  },
  {
    id: 3,
    label: "Users",
    index: 2,
    icon: <GroupIcon />,
  },
  {
    id: 4,
    label: "Change Password",
    index: 3,
    icon: <LockIcon />,
  },
  {
    id: 5,
    label: "View Progress",
    index: 4,
    icon: <LoopIcon />,
  },
  {
    id: 5,
    label: "Progress Dashboard",
    index: 5,
    icon: <DashboardIcon />,
  },
];

export const sidebarValueUser = [
    {
      id: 0,
      component: <ProgressMonitoring/>,
    },
  ];
  
  export const sidebarMenuUser = [
    {
      id: 1,
      label: "Update Progress",
      index: 0,
      icon: <ListAltIcon />,
    }
  ];

