import ATransmission from "assets/icons-menu/a-transmission.svg";
import Adjustable from "assets/icons-menu/adjust-exhaust.svg";
import AirFilter from "assets/icons-menu/air-filter.svg";
import Awd from "assets/icons-menu/awd.svg";
import Axle from "assets/icons-menu/axle.svg";
import BallJoint from "assets/icons-menu/ball-joint.svg";
import BearingBushing from "assets/icons-menu/bearing-bushing.svg";
import BrakeDisk from "assets/icons-menu/brake-disk.svg";
import BrakeFluid from "assets/icons-menu/brake-fluid.svg";
import BrakePads from "assets/icons-menu/brake-pads.svg";
import Buzzer from "assets/icons-menu/buzzer.svg";
import CarDiagnostic from "assets/icons-menu/car-diagnostic.svg";
import Suspension from "assets/icons-menu/car-suspension.svg";
import Catalytic from "assets/icons-menu/catalytic-converter.svg";
import CheckEngine from "assets/icons-menu/check-engine.svg";
import ChipTuning from "assets/icons-menu/chip-tuning.svg";
import Coolant from "assets/icons-menu/coolant.svg";
import Dpf from "assets/icons-menu/dpf.svg";
import EngineOil from "assets/icons-menu/engine-oil.svg";
import EuroCatalytic from "assets/icons-menu/euro-catalytic.svg";
import ExhaustDiagnostic from "assets/icons-menu/exhaust-diagnostic.svg";
import ExhaustInstallation from "assets/icons-menu/exhaust-installation.svg";
import ExhaustPipes from "assets/icons-menu/exhaust-pipes.svg";
import ExhaustRepairing from "assets/icons-menu/exhaust-repairing.svg";
import ExhaustTuning from "assets/icons-menu/exhaust-tuning.svg";
import FuelFilter from "assets/icons-menu/fuel-filter.svg";
import MTransmission from "assets/icons-menu/m-transmission.svg";
import Magnaflow from "assets/icons-menu/magnaflow.svg";
import Muffler from "assets/icons-menu/muffler.svg";
import PowerSteering from "assets/icons-menu/power-steering.svg";
import Resonator from "assets/icons-menu/resonator.svg";
import SalonFilter from "assets/icons-menu/salon-filter.svg";
import ShockAbsorber from "assets/icons-menu/shock-absorber.svg";
import ShockAbsorbers from "assets/icons-menu/shock-absorbers.svg";
import SilentBlock from "assets/icons-menu/silent-block.svg";
import Spark from "assets/icons-menu/spark.svg";
import StabilizerRod from "assets/icons-menu/stabilizer-rod.svg";
import Stabilizer from "assets/icons-menu/stabilizer.svg";
import SteeringRack from "assets/icons-menu/steering-rack.svg";
import SteeringTip from "assets/icons-menu/steering-tip.svg";
import SuspensionArm from "assets/icons-menu/suspension-arm.svg";
import Thor from "assets/icons-menu/thor-exhaust.svg";

export const MENUS = {
  EXHAUST_TUNING: [
    {
      url: "/service/thor-exhaust",
      icon: Thor,
      title: "Электронная система выхлопа",
    },
    {
      url: "/service/reguliruemiy-vyhlop",
      icon: Adjustable,
      title: "Установка регулируемого выхлопа",
    },
    {
      url: "/service/magnaflow",
      icon: Magnaflow,
      title: "Глушители Magnaflow",
    },
    {
      url: "/service/exhaust-buzzer",
      icon: Buzzer,
      title: "Насадки глушителя Buzzer",
    },
    {
      url: "/service/chip-tuning",
      icon: ChipTuning,
      title: "Чип-тюнинг двигателя",
    },
    {
      url: "/service/ustanovka-rezonatorov",
      icon: Resonator,
      title: "Установка резонаторов",
    },
    {
      url: "/service/ustanovka-glushitela",
      icon: ExhaustInstallation,
      title: "Установка банок глушителя",
    },
    {
      url: "/service/izgotovlenie-pipe",
      icon: ExhaustPipes,
      title: "Изготовление Y, H, X-Pipe",
    },
    {
      url: "/service/izgotovlenie-downpipe",
      icon: ExhaustPipes,
      title: "Изготовление даунпайпов",
    },
    {
      url: "/service/exhaust-tuning",
      icon: ExhaustTuning,
      title: "Тюнинг выхлопной системы",
    },
  ],
  EXHAUST_REPAIR: [
    {
      url: "/service/remont-vyhlopnih-sistem",
      icon: ExhaustRepairing,
      title: "Ремонт выхлопных систем",
    },
    {
      url: "/service/zamena-gofry",
      icon: Muffler,
      title: "Замена гофры",
    },
    {
      url: "/service/remont-banki-glushitela",
      icon: ExhaustInstallation,
      title: "Ремонт банки глушителя",
    },
    {
      url: "/service/udalenie-katalizatorov",
      icon: Catalytic,
      title: "Удаление катализаторов",
    },
    {
      url: "/service/zamena-katalizatora",
      icon: Catalytic,
      title: "Замена катализаторов",
    },
    {
      url: "/service/udalenie-sagevyh-filtrov",
      icon: Dpf,
      title: "Удаление сажевых фильтров",
    },
    {
      url: "/service/zamena-sagevogo-filtra",
      icon: Dpf,
      title: "Замена сажевых фильтров",
    },
    {
      url: "/service/euro-4-5",
      icon: EuroCatalytic,
      title: "Универсальные катализаторы EURO-5",
    },
  ],
  EXHAUST_CATALYST: [
    {
      url: "/service/udalenie-katalizatorov",
      icon: Catalytic,
      title: "Удаление катализаторов",
    },
    {
      url: "/service/zamena-katalizatora",
      icon: Catalytic,
      title: "Замена катализаторов",
    },
    {
      url: "/service/euro-4-5",
      icon: EuroCatalytic,
      title: "Универсальные катализаторы EURO-5",
    },
    {
      url: "/catalytic",
      icon: CheckEngine,
      title: "Ремонт катализаторов",
    },
  ],
  EXHAUST_DPF: [
    {
      url: "/service/udalenie-sagevyh-filtrov",
      icon: Dpf,
      title: "Удаление сажевых фильтров",
    },
    {
      url: "/service/zamena-sagevogo-filtra",
      icon: Dpf,
      title: "Замена сажевых фильтров",
    },
    {
      url: "/dpf",
      icon: CheckEngine,
      title: "Ремонт сажевых фильтров",
    },
  ],
  SERVICE: [
    {
      url: "/service/oil-engine",
      icon: EngineOil,
      title: "Замена масла и фильтра в двигателе",
    },
    {
      url: "/service/zamena-masla-v-akpp",
      icon: ATransmission,
      title: "Замена масла в АКПП",
    },
    {
      url: "/service/zamena-masla-v-mkpp",
      icon: MTransmission,
      title: "Замена масла в МКПП",
    },
    {
      url: "/service/zamena-masla-v-reduktore",
      icon: Awd,
      title: "Замена масла в заднем редукторе",
    },
    {
      url: "/service/zamena-zhidkosti-gur",
      icon: PowerSteering,
      title: "Замена жидкости в гидроусилителе руля",
    },
    {
      url: "/service/zamena-vozdushnogo-filtra",
      icon: AirFilter,
      title: "Замена воздушного фильтра",
    },
    {
      url: "/service/zamena-salonnogo-filtra",
      icon: SalonFilter,
      title: "Замена салонного фильтра",
    },
    {
      url: "/service/fuel-filter",
      icon: FuelFilter,
      title: "Замена топливного фильтра",
    },
    {
      url: "/service/zamena-tormoznoy-zhidkosti",
      icon: BrakeFluid,
      title: "Замена тормозной жидкости",
    },
    {
      url: "/service/zamena-ohlazhdaushei-zhidkosti",
      icon: Coolant,
      title: "Замена охлаждающей жидкости",
    },
    {
      url: "/service/zamena-svechei-zazhiganiya",
      icon: Spark,
      title: "Замена свечей зажигания",
    },
    {
      url: "/service/zamena-tormoznyh-diskov",
      icon: BrakeDisk,
      title: "Замена тормозных дисков",
    },
    {
      url: "/service/zamena-tormoznyh-kolodok",
      icon: BrakePads,
      title: "Замена тормозных колодок",
    },
    {
      url: "/service/comp-diagnostic",
      icon: CheckEngine,
      title: "Компьютерная диагностика",
    },
    {
      url: "/service/exhaust-diagnostic",
      icon: ExhaustDiagnostic,
      title: "Диагностика выхлопной системы",
    },
    {
      url: "/service/diagnistic",
      icon: CarDiagnostic,
      title: "Диагностика на подъемнике",
    },
  ],
  REPAIR: [
    {
      url: "/service/zamena-tormoznyh-diskov",
      icon: BrakeDisk,
      title: "Замена тормозных дисков",
    },
    {
      url: "/service/zamena-tormoznyh-kolodok",
      icon: BrakePads,
      title: "Замена тормозных колодок",
    },
    {
      url: "/service/zamena-remkomplekta-supporta",
      icon: BrakeDisk,
      title: "Замена ремкомплекта суппорта",
    },
    {
      url: "/service/zamena-rulevoi-reiki",
      icon: SteeringRack,
      title: "Замена рулевой рейки",
    },
    {
      url: "/service/zamena-rulevoi-tyagi",
      icon: Suspension,
      title: "Замена рулевой тяги",
    },
    {
      url: "/service/zamena-rulevogo-nakonechnika",
      icon: SteeringTip,
      title: "Замена рулевого наконечника",
    },
    {
      url: "/service/zamena-amortizatora",
      icon: ShockAbsorbers,
      title: "Замена амортизатора, пружины",
    },
    {
      url: "/service/zamena-opory-amortizatora",
      icon: ShockAbsorber,
      title: "Замена опоры амортизатора",
    },
    {
      url: "/service/zamena-stupichnigo-podshipnika",
      icon: BearingBushing,
      title: "Замена ступичного подшипника",
    },
    {
      url: "/service/zamena-richaga-podveski",
      icon: SuspensionArm,
      title: "Замена рычага подвески",
    },
    {
      url: "/service/zamena-silentblock",
      icon: SilentBlock,
      title: "Замена салейнтблока подвески",
    },
    {
      url: "/service/zamena-sharovoi-opory",
      icon: BallJoint,
      title: "Замена шаровой опоры",
    },
    {
      url: "/service/zamena-stoiki-stabilizatora",
      icon: StabilizerRod,
      title: "Замена стойки стабилизатора",
    },
    {
      url: "/service/zamena-vtulki-stabilizatora",
      icon: Stabilizer,
      title: "Замена втулки стабилизатора",
    },
    {
      url: "/service/mzamena-shrusa",
      icon: Axle,
      title: "Замена шруса",
    },
    {
      url: "/service/diagnistic",
      icon: CarDiagnostic,
      title: "Диагностика на подъемнике",
    },
  ],
};
