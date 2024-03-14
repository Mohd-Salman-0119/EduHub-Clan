import React from "react";
import {
    Card,
    Timeline,
    TimelineBody,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineItem,
    Typography
} from "@material-tailwind/react";
import { faCircleChevronDown, faClock } from "@fortawesome/free-solid-svg-icons";
import BankCard from "../miscellaneous/BankCard";
import MyDeliver from "../miscellaneous/MyDeliver";
import OrderMenuItem from "../miscellaneous/OrderMenuItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import worldMap from "../../assets/images/world-map.png";


const InfoSidebar = () => {
    return (
        <Card className="p-4 w-1/3 flex flex-col gap-3">
            <BankCard />
            <div className="flex flex-col gap-1">
                <div className="flex justify-between">
                    <h1 className="font-semibold">Order Menu</h1>
                    <IconTextButton
                        text={"View All"}
                        icon={faCircleChevronDown}
                        className="flex-row-reverse text-primary cursor-pointer"
                    />
                </div>
                <div className="flex flex-col gap-3">
                    <OrderMenuItem className="p-0" />
                    <OrderMenuItem className="p-0" />
                    <OrderMenuItem className="p-0" />
                </div>
            </div>
            <div className="flex justify-between flex-col gap-2">
                <h1 className="font-semibold">My Order</h1>
                <img src={worldMap} className="rounded-lg" />
            </div>
            <div>
                <MyDeliver name={"Salman Qadri"} status="Developer" />
            </div>
            <Timeline>
                <TimelineItem>
                    <TimelineConnector />
                    <TimelineHeader className="gap-2">
                        <TimelineIcon className="px-1 py-1 bg-primary text-xs flex justify-center">
                            <FontAwesomeIcon icon={faClock} />
                        </TimelineIcon>
                        <Typography className="text-gray text-sm">My Delivery time</Typography>
                    </TimelineHeader>
                    <TimelineBody className="gap-2 m-0">
                        <Typography className="font-semibold text-sm">30 Minutes</Typography>
                    </TimelineBody>
                </TimelineItem>
                <TimelineItem>
                    <TimelineHeader className="gap-2">
                        <TimelineIcon className="px-1 py-1 bg-primary text-xs flex justify-center">
                            <FontAwesomeIcon icon={faClock} />
                        </TimelineIcon>
                        <Typography className="text-gray text-sm">My Delivery address</Typography>
                    </TimelineHeader>
                    <TimelineBody className="gap-2">
                        <Typography className="font-semibold text-sm">8585 Green Road</Typography>
                    </TimelineBody>
                </TimelineItem>
            </Timeline>
        </Card>
    );
};

export default InfoSidebar;
