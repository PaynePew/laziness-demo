import { PlasmicCanvasContext } from "@plasmicapp/host";
import { useEffect, useState } from "react";
import ReactEChartsCore from "echarts-for-react/lib/core";
// Import the echarts core module, which provides the necessary interfaces for using echarts.
import * as echarts from "echarts/core";
// Import charts, all with Chart suffix
import { PieChart, PieSeriesOption } from "echarts/charts";
// import components, all suffixed with Component
import {
  TooltipComponent,
  TooltipComponentOption,
  TitleComponent,
  TitleComponentOption,
  LegendComponent,
  LegendComponentOption,
  VisualMapComponent,
  VisualMapComponentOption,
} from "echarts/components";
// Import renderer, note that introducing the CanvasRenderer or SVGRenderer is a required step
import { CanvasRenderer } from "echarts/renderers";

interface PriceChartType {
  className?: string;
  width?: number;
  height?: number;
  maxWidth?: number;
}

type ECOption = echarts.ComposeOption<
  | PieSeriesOption
  | TitleComponentOption
  | TooltipComponentOption
  | VisualMapComponentOption
  | LegendComponentOption
>;

echarts.use([
  PieChart,
  TitleComponent,
  TooltipComponent,
  CanvasRenderer,
  LegendComponent,
  VisualMapComponent,
]);

export function PriceChart({
  className,
  width,
  height,
  maxWidth,
}: PriceChartType) {
  const [option, setOption] = useState<ECOption>({});
  useEffect(() => {
    const eChartOption: ECOption = {
      backgroundColor: "#ffff",
      title: {
        text: "建築估價",
        left: "center",
        top: 20,
        textStyle: {
          color: "#8596AA",
        },
      },
      tooltip: {
        trigger: "item",
      },
      visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
          colorLightness: [0, 1],
        },
      },
      legend: {
        bottom: 20,
        itemGap: 25,
        textStyle: {
          color: "#000000",
        },
        icon: "circle",
      },
      series: [
        {
          name: "Access From",
          type: "pie",
          radius: "55%",
          center: ["50%", "50%"],
          data: [
            { value: 335, name: "Direct" },
            { value: 310, name: "Email" },
            { value: 274, name: "Union Ads" },
            { value: 235, name: "Video Ads" },
            { value: 400, name: "Search Engine" },
          ].sort(function (a, b) {
            return a.value - b.value;
          }),
          roseType: "radius",
          label: {
            color: "#000000",
          },
          labelLine: {
            lineStyle: {
              color: "#000000",
            },
            smooth: 0.2,
            length: 2,
            length2: 4,
          },
          itemStyle: {
            color: "#c23531",
            // shadowBlur: 200,
            // shadowColor: "rgba(0, 0, 0, 0.5)",
          },
          animationType: "scale",
          animationEasing: "elasticOut",
          animationDelay: function (idx) {
            return Math.random() * 200;
          },
        },
      ],
    };
    setOption(eChartOption);
  }, []);

  return (
    <div className={className}>
      {option && (
        <ReactEChartsCore
          echarts={echarts}
          option={option}
          notMerge={true}
          lazyUpdate={true}
          style={{
            height: `${height}px`,
            width: `${width}%`,
            maxWidth: `${maxWidth}%`,
          }}
        />
      )}
    </div>
  );
}
