import {
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  AreaChart,
  Area,
  Tooltip,
} from "recharts";
import { format, parseISO } from "date-fns";
import type { ChartProps } from "../types/index";
import numbro from "numbro";

export function Chart(props: ChartProps) {
  const { data, className } = props;
  const classNameIncluded = [props.className].join(" ");
  return (
    <ResponsiveContainer
      width={props.width ? props.width : "100%"}
      height={props.height ? props.height : 400}
      className={classNameIncluded}
    >
      <AreaChart data={data}>
        <defs>
          <linearGradient id="chart" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f031e7" stopOpacity={0.3} />
            <stop offset="75%" stopColor="#00b7ff" stopOpacity={0.3} />
          </linearGradient>
        </defs>

        <Area
          type="monotone"
          dataKey="value"
          stroke="#b234f5"
          fill="url(#chart)"
          strokeWidth={2}
        />

        <YAxis
          dataKey="value"
          domain={[9800000000, 1060000000]}
          axisLine={{ stroke: "#FFF", strokeWidth: 1, opacity: 0.1 }}
          tickLine={false}
          tick={{ fill: "#c2c4dc", fontSize: "12px" }}
          tickFormatter={(string) => {
            return numbro(string).format({
              average: true,
              mantissa: 2,
            });
          }}
        ></YAxis>
        <XAxis
          dataKey="date"
          axisLine={{ stroke: "#FFF", strokeWidth: 1, opacity: 0.1 }}
          tickLine={false}
          tick={{ fill: "#c2c4dc", fontSize: "12px" }}
          tickFormatter={(value) => {
            return format(parseISO(value), "dd.MM");
          }}
        />
        <Tooltip content={<CustomTooltipTVL />} />
        <CartesianGrid opacity={0.1}  />
      </AreaChart>
    </ResponsiveContainer>
  );
};

const CustomTooltipTVL = ({ active, payload, label }: any) => {
  if (!active) return null;

  const value = numbro(payload[0].value).format({
    average: true,
    mantissa: 2,
  });

  return (
    <div className="chart-tooltip">
      <p className="label">{format(parseISO(label), "MMM dd")}</p>
      <p className="value">{value}</p>
    </div>
  );
};

