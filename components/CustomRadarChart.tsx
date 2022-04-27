import { Box } from "@mantine/core";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  Interaction,
} from "chart.js";
import { Point } from "tabler-icons-react";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

type Props = {
  data: number[];
};

const transformData = (data: number[]) => {
  const output = data.map((inputVal, i) => {
    return i == 0 ? inputVal * 5 : inputVal;
  });
  return output;
};

const setChartData = (data: number[]) => ({
  labels: ["1", "2", "3", "4", "5", "6", "7", "8"],
  datasets: [
    {
      label: "คะแนน",
      data: transformData(data),
      fill: true,
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgb(255, 99, 132)",
      pointBackgroundColor: "rgb(255, 99, 132)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(255, 99, 132)",
    }
  ],
});


const options = {
  elements: {
    line: {
      borderWidth: 3,
    },
  },
  scales: {
    r: {
      suggestedMin: 0,
      suggestedMax: 5,
      ticks: {
        stepSize: 1
      }
    },
  },
  interaction: {
    intersect: false,
    mode: 'point',
  },
  plugins: {
    tooltip: {
      enabled: true,
      callbacks: {
        label: function (datasets) {
          const datasetsLabel = [
            'โครงการที่ส่งผลต่อปัจจัยหลักภายใต้ห่วงโซ่คุณค่าของเป้าหมายแผนแม่บทย่อยที่เลือกมา(ตามข้อเท็จจริง) และสามารถส่งผลต่อการบรรลุเป้าหมายแผนแม่บทและยุทธศาสตร์ชาติ(XYZ)',
            'โครงการเป็นการจัดตั้งกองทุนฯ/หน่วยงาน/คณะกรรมการต่างๆ',
            'ความจำเป็นต้องมีหรือไม่มีโครงการนี้',
            'โครงการเป็นการจัดทำจากข้อมูลเชิงประจักษ์ เช่น มีข้อมูลสถิติ/ข้อเท็จจริงรองรับ',
            'โครงการมีวัตถุประสงค์ ผลผลิต ผลลัพธ์ และกลุ่มเป้าหมายผู้รับประโยชน์ชัดเจน สามารถส่งผลต่อการบรรลุเป้าหมายอย่างเป็นรูปธรรม',
            'โครงการมีแผนการดำเนินงานและกิจกรรมที่ชัดเจน เป็นไปได้จริง และส่งผลโดยตรงต่อการบรรลุเป้าหมายและวัตถุประสงค์ของโครงการอย่างแท้จริง',
            'โครงการมีตัวชี้วัดที่สามารถสะท้อนการบรรลุผลสัมฤทธิ์ตามเป้าหมายได้อย่างเป็นรูปธรรม',
            'ในกรณีที่เป็นโครงการจัดซื้อครุภัณฑ์/ปรับปรุง/ซ่อมแซม/ก่อนสร้างอาคารสถานที่ของส่วนราชการต้องส่งผลต่อการบรรลุเป้าหมายแผนแม่บทย่อยที่เกี่ยวข้องอย่างชัดเจน',
          ]
          return datasets.label + ' ' + datasetsLabel[parseInt(datasets.label) - 1]
        },
      },
      titleSpacing: 3,
      footerSpacing: 2,
      xPadding: 6,
      yPadding: 6,
      caretSize: 6,



    },

  },

};

const CustomRadarChart = ({ data }: Props) => {
  return <Radar data={setChartData(data)} options={options} />;

};

export default CustomRadarChart;
