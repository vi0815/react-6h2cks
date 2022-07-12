import * as React from 'react';
import { XDate } from './xdate';
import { XDateRange } from './xdateRange';

const testValue = '2022-07-18T08:00+0100';

export default function MaterialUIPickers() {
  const [resourceDate, setResourceDate] = React.useState({
    startDateString: null,
    startDateMInutesMidnight: null,
    endDateString: null,
    endDateMInutesMidnight: null,

    startDateMoment: null,
    endDateMoment: null

  });


  return (
    <div>
      Support <br /> <br />
      <XDate
        startDate={null}
        endDate={null}
        timeZone={'Europe/London'}
        showTime={false}
        disableShowTimeSwitch={false}
        onChange={(target) => {
          setResourceDate(target)
          console.log(target)
        }}
      />
      <br />
      <p>
        startdate: {resourceDate.startDateString!=null?resourceDate.startDateString:"null"}<br />
        startminutes: {resourceDate.startDateMinutesMidnight!=null?resourceDate.startDateMinutesMidnight:"null"}
        <br />
        startdatemoment: {resourceDate.startDateMoment!=null?resourceDate.startDateMoment.format('YYYY-MM-DD HH:MM'):"null"}<br />

        enddate: {resourceDate.startDateString!=null?resourceDate.startDateString:"null"}
        <br />
        endminutes: {resourceDate.endDateMinutesMidnight!=null?resourceDate.endDateMinutesMidnight:"null"}<br />
        enddate: {resourceDate.endDateMoment!=null?resourceDate.endDateMoment.format('YYYY-MM-DD HH:MM'):"null"}
        <br />
      </p>
      <br /> Event <br /> <br />
      <XDate
        startDate="2022-12-22"
        endDate={'2022-12-24'}
        timeZone={'Europe/London'}
        showTime={true}
        disableShowTimeSwitch={true}
      />
    </div>
  );
}
