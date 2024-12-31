import { ComponentConfig } from "@measured/puck"
import { DatePicker } from "antd" // Import DatePicker từ Ant Design
import moment, { Moment } from "moment" // Import Moment
import { CountdownProps, RenderConfig } from "./RenderConfig"

export const ManCountdown: ComponentConfig<CountdownProps> = {
  label: "Man | Countdown",
  fields: {
    className: {
      label: "Class Name",
      type: "text",
    },
    targetDate: {
      label: "Target Date",
      type: "custom",
      render: props => (
        <DatePicker
          {...props}
          format="YYYY-MM-DD"
          placeholder="Select Target Date"
          value={props.value ? moment(props.value) : null}
          onChange={(date: Moment | null) => {
            if (date) {
              props.onChange(date.toDate())
            }
          }}
        />
      ),
    },
  },

  ...RenderConfig,
}
