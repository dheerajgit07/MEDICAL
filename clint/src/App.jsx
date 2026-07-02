import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout Components
import TopBar from './components/layout/TopBar';
import Navbar from './components/layout/Navbar';
import CategoryNav from './components/layout/CategoryNav';
import Footer from './components/home/Footer';
import WhatsAppButton from './components/home/WhatsAppButton';
import CategoryLayout from './components/layout/CategoryLayout'; // Niche di gayi file banayein

// Page Components
import Home from './pages/Home';
import About from './pages/about/About';
import AdminLogin from './pages/Admin/AdminLogin';
import AdminDashboard from './pages/Admin/AdminDashboard';
import Quality from './pages/Quality/Quality';
import Enquiry from './pages/enquery/Enquiry';
import Warranty from './pages/warrenty/Warranty';
import Exhibitions from './pages/Exhabitons/Exhibitions';
import Contact from './pages/contactus/Contactus';

// Page slide show content
import Digno from './components/CatagoriesPages/listPage/Digno';
import Surb from './components/CatagoriesPages/listPage/Surb';
import Products from './pages/product/Product';
import Cart from './components/Cart/Cart';

// More Category Pages
import Anaesthesia from './components/CatagoriesPages/listPage/Anaesthesia';
import Apparel from './components/CatagoriesPages/listPage/Apparel';
import Autoclave from './components/CatagoriesPages/listPage/Autoclave';
import Coldchain from './components/CatagoriesPages/listPage/Coldchain';
import Dental from './components/CatagoriesPages/listPage/Dental';
import Furniture from './components/CatagoriesPages/listPage/Furniture';
import Gynaecology from './components/CatagoriesPages/listPage/Gynaecology';
import Height from './components/CatagoriesPages/listPage/Height';
import Holloware from './components/CatagoriesPages/listPage/Holloware';
import Infantcare from './components/CatagoriesPages/listPage/Infantcare';
import Labcoat from './components/CatagoriesPages/listPage/Labcoat';
import Laboratory from './components/CatagoriesPages/listPage/Laboratory';
import Laporoscopy from './components/CatagoriesPages/listPage/Laporoscopy';
import Miscelineous from './components/CatagoriesPages/listPage/Miscelineous';
import OTequipment from './components/CatagoriesPages/listPage/OTequipment';
import Orthopedic from './components/CatagoriesPages/listPage/Orthopedic';
import Phisiotherapy from './components/CatagoriesPages/listPage/Phisiotherapy';
import Plasticware from './components/CatagoriesPages/listPage/Plasticware';
import Reagents from './components/CatagoriesPages/listPage/Reagents';
import Rubber from './components/CatagoriesPages/listPage/Rubber';
import Suction from './components/CatagoriesPages/listPage/Suction';
import Surgical from './components/CatagoriesPages/listPage/Surgical';
import Waste from './components/CatagoriesPages/listPage/Waste';
import Xray from './components/CatagoriesPages/listPage/Xray';
import Yoga from './components/CatagoriesPages/listPage/Yoga';
import Medical from './components/CatagoriesPages/listPage/Medical';
import OrthopaedicAids from './components/CatagoriesPages/listPage/Ortopaedic';



import Stethoscopes from './components/CatagoriesPages/Type/DiagnosticEquipments/Stethoscopes.jsx';
import Laryngoscopes from './components/CatagoriesPages/Type/DiagnosticEquipments/Laryngoscopes.jsx';
import BPMonitorsSphygmomanometers from './components/CatagoriesPages/Type/DiagnosticEquipments/BPMonitorsSphygmomanometers.jsx';
import MedicalReflexHammers from './components/CatagoriesPages/Type/DiagnosticEquipments/MedicalReflexHammers.jsx';
import ECGMachineECGPaperRolls from './components/CatagoriesPages/Type/DiagnosticEquipments/ECGMachineECGPaperRolls.jsx';
import PenFlashlight from './components/CatagoriesPages/Type/DiagnosticEquipments/PenFlashlight.jsx';
import FetalDopplerMonitor from './components/CatagoriesPages/Type/DiagnosticEquipments/FetalDopplerMonitor.jsx';
import PatientMonitor from './components/CatagoriesPages/Type/DiagnosticEquipments/PatientMonitor.jsx';
import PulseOximeter from './components/CatagoriesPages/Type/DiagnosticEquipments/PulseOximeter.jsx';
import Nebulizers from './components/CatagoriesPages/Type/DiagnosticEquipments/Nebulizers.jsx';
import PeakFlowMeter from './components/CatagoriesPages/Type/DiagnosticEquipments/PeakFlowMeter.jsx';
import AerosolSpacer from './components/CatagoriesPages/Type/DiagnosticEquipments/AerosolSpacer.jsx';
import TongueDepressors from './components/CatagoriesPages/Type/DiagnosticEquipments/TongueDepressors.jsx';
import Otoscopes from './components/CatagoriesPages/Type/DiagnosticEquipments/Otoscopes.jsx';
import OphthalmologyInstruments from './components/CatagoriesPages/Type/DiagnosticEquipments/OphthalmologyInstruments.jsx';
import TuningFork from './components/CatagoriesPages/Type/DiagnosticEquipments/TuningFork.jsx';
import PodiatryProducts from './components/CatagoriesPages/Type/DiagnosticEquipments/PodiatryProducts.jsx';
import Goniometer from './components/CatagoriesPages/Type/DiagnosticEquipments/Goniometer.jsx';
import Thermometers from './components/CatagoriesPages/Type/DiagnosticEquipments/Thermometers.jsx';
import Glucometer from './components/CatagoriesPages/Type/DiagnosticEquipments/Glucometer.jsx';
import HospitalScrubs from './components/CatagoriesPages/Type/HospitalScrubsLinens/HospitalScrubs.jsx';
import SurgeonPatientGown from './components/CatagoriesPages/Type/HospitalScrubsLinens/SurgeonPatientGown.jsx';
import HospitalUniformsDresses from './components/CatagoriesPages/Type/HospitalScrubsLinens/HospitalUniformsDresses.jsx';
import HospitalBedSheets from './components/CatagoriesPages/Type/HospitalScrubsLinens/HospitalBedSheets.jsx';
import PatientIdentificationWristbands from './components/CatagoriesPages/Type/HospitalScrubsLinens/PatientIdentificationWristbands.jsx';
import MedicalDrapeSheets from './components/CatagoriesPages/Type/HospitalScrubsLinens/MedicalDrapeSheets.jsx';
import PillowPillowCover from './components/CatagoriesPages/Type/HospitalScrubsLinens/PillowPillowCover.jsx';
import OperationTheatreTowels from './components/CatagoriesPages/Type/HospitalScrubsLinens/OperationTheatreTowels.jsx';
import FemaleLabCoat28 from './components/CatagoriesPages/Type/LabCoat/FemaleLabCoat28.jsx';
import FemaleLabCoat32 from './components/CatagoriesPages/Type/LabCoat/FemaleLabCoat32.jsx';
import FemaleLabCoat35 from './components/CatagoriesPages/Type/LabCoat/FemaleLabCoat35.jsx';
import FemaleLabCoat37 from './components/CatagoriesPages/Type/LabCoat/FemaleLabCoat37.jsx';
import UnisexLabCoat30 from './components/CatagoriesPages/Type/LabCoat/UnisexLabCoat30.jsx';
import UnisexLabCoat34 from './components/CatagoriesPages/Type/LabCoat/UnisexLabCoat34.jsx';
import UnisexLabCoat37 from './components/CatagoriesPages/Type/LabCoat/UnisexLabCoat37.jsx';
import UnisexLabCoat41 from './components/CatagoriesPages/Type/LabCoat/UnisexLabCoat41.jsx';
import LeadAprons from './components/CatagoriesPages/Type/XRaySupplies/LeadAprons.jsx';
import ThyroidCollarShield from './components/CatagoriesPages/Type/XRaySupplies/ThyroidCollarShield.jsx';
import GonadOvarianShields from './components/CatagoriesPages/Type/XRaySupplies/GonadOvarianShields.jsx';
import RadiationProtectionHeadShield from './components/CatagoriesPages/Type/XRaySupplies/RadiationProtectionHeadShield.jsx';
import BreastProtector from './components/CatagoriesPages/Type/XRaySupplies/BreastProtector.jsx';
import LeadGloves from './components/CatagoriesPages/Type/XRaySupplies/LeadGloves.jsx';
import LeadGoggles from './components/CatagoriesPages/Type/XRaySupplies/LeadGoggles.jsx';
import XRayViewBox from './components/CatagoriesPages/Type/XRaySupplies/XRayViewBox.jsx';
import LeadApronRacksHangers from './components/CatagoriesPages/Type/XRaySupplies/LeadApronRacksHangers.jsx';
import MobileLeadBarrier from './components/CatagoriesPages/Type/XRaySupplies/MobileLeadBarrier.jsx';
import XRayHangers from './components/CatagoriesPages/Type/XRaySupplies/XRayHangers.jsx';
import XRayCassettes from './components/CatagoriesPages/Type/XRaySupplies/XRayCassettes.jsx';
import ManualArtificialResuscitators from './components/CatagoriesPages/Type/AnaesthesiaEquipments/ManualArtificialResuscitators.jsx';
import BreathingCircuit from './components/CatagoriesPages/Type/AnaesthesiaEquipments/BreathingCircuit.jsx';
import Laryngoscope from './components/CatagoriesPages/Type/AnaesthesiaEquipments/Laryngoscope.jsx';
import EmergencyFIRSTAIDKit from './components/CatagoriesPages/Type/AnaesthesiaEquipments/EmergencyFIRSTAIDKit.jsx';
import AnesthesiaMachine from './components/CatagoriesPages/Type/AnaesthesiaEquipments/AnesthesiaMachine.jsx';
import AnaesthesiaFaceMasks from './components/CatagoriesPages/Type/AnaesthesiaEquipments/AnaesthesiaFaceMasks.jsx';
import CPRMask from './components/CatagoriesPages/Type/AnaesthesiaEquipments/CPRMask.jsx';
import DisposableFaceMasks from './components/CatagoriesPages/Type/AnaesthesiaEquipments/DisposableFaceMasks.jsx';
import GuedelAirways from './components/CatagoriesPages/Type/AnaesthesiaEquipments/GuedelAirways.jsx';
import MouthOpener from './components/CatagoriesPages/Type/AnaesthesiaEquipments/MouthOpener.jsx';
import NIVNonVentedMask from './components/CatagoriesPages/Type/AnaesthesiaEquipments/NIVNonVentedMask.jsx';
import CPAPBIPAPMask from './components/CatagoriesPages/Type/AnaesthesiaEquipments/CPAPBIPAPMask.jsx';
import HeadHarness from './components/CatagoriesPages/Type/AnaesthesiaEquipments/HeadHarness.jsx';
import RebreathingBags from './components/CatagoriesPages/Type/AnaesthesiaEquipments/RebreathingBags.jsx';
import AirwaysSystem from './components/CatagoriesPages/Type/AnaesthesiaEquipments/AirwaysSystem.jsx';
import ReusableCircuit from './components/CatagoriesPages/Type/AnaesthesiaEquipments/ReusableCircuit.jsx';
import HighFlowNasalCannula from './components/CatagoriesPages/Type/AnaesthesiaEquipments/HighFlowNasalCannula.jsx';
import VentilatorCircuit from './components/CatagoriesPages/Type/AnaesthesiaEquipments/VentilatorCircuit.jsx';
import GeneralProducts from './components/CatagoriesPages/Type/AnaesthesiaEquipments/GeneralProducts.jsx';
import ComboCircuit from './components/CatagoriesPages/Type/AnaesthesiaEquipments/ComboCircuit.jsx';
import PortableAutoclaves from './components/CatagoriesPages/Type/AutoclaveSterilizer/PortableAutoclaves.jsx';
import VerticalAutoclaves from './components/CatagoriesPages/Type/AutoclaveSterilizer/VerticalAutoclaves.jsx';
import HorizontalAutoclaves from './components/CatagoriesPages/Type/AutoclaveSterilizer/HorizontalAutoclaves.jsx';
import DentalAutoclaves from './components/CatagoriesPages/Type/AutoclaveSterilizer/DentalAutoclaves.jsx';
import TattooAutoclaves from './components/CatagoriesPages/Type/AutoclaveSterilizer/TattooAutoclaves.jsx';
import UltravioletChamber from './components/CatagoriesPages/Type/AutoclaveSterilizer/UltravioletChamber.jsx';
import InstrumentSterilizer from './components/CatagoriesPages/Type/AutoclaveSterilizer/InstrumentSterilizer.jsx';
import FormalinChamber from './components/CatagoriesPages/Type/AutoclaveSterilizer/FormalinChamber.jsx';
import DressingDrums from './components/CatagoriesPages/Type/AutoclaveSterilizer/DressingDrums.jsx';
import CidexTrays from './components/CatagoriesPages/Type/AutoclaveSterilizer/CidexTrays.jsx';
import SterilizationCassette from './components/CatagoriesPages/Type/AutoclaveSterilizer/SterilizationCassette.jsx';
import AutoclaveAccessories from './components/CatagoriesPages/Type/AutoclaveSterilizer/AutoclaveAccessories.jsx';
import StadiometerHeightMeasuringScale from './components/CatagoriesPages/Type/HeightWeightScales/StadiometerHeightMeasuringScale.jsx';
import MeasuringTape from './components/CatagoriesPages/Type/HeightWeightScales/MeasuringTape.jsx';
import Infantometer from './components/CatagoriesPages/Type/HeightWeightScales/Infantometer.jsx';
import PersonalWeighingScale from './components/CatagoriesPages/Type/HeightWeightScales/PersonalWeighingScale.jsx';
import BabyWeighingScales from './components/CatagoriesPages/Type/HeightWeightScales/BabyWeighingScales.jsx';
import StatureMeter from './components/CatagoriesPages/Type/HeightWeightScales/StatureMeter.jsx';
import VaccineCarrierBox from './components/CatagoriesPages/Type/ColdChainEquipment/VaccineCarrierBox.jsx';
import ColdBox from './components/CatagoriesPages/Type/ColdChainEquipment/ColdBox.jsx';
import IcePack from './components/CatagoriesPages/Type/ColdChainEquipment/IcePack.jsx';
import InstrumentKit from './components/CatagoriesPages/Type/SurgicalInstruments/InstrumentKit.jsx';
import SurgicalForceps from './components/CatagoriesPages/Type/SurgicalInstruments/SurgicalForceps.jsx';
import GeneralDissectingForceps from './components/CatagoriesPages/Type/SurgicalInstruments/GeneralDissectingForceps.jsx';
import SurgicalScissors from './components/CatagoriesPages/Type/SurgicalInstruments/SurgicalScissors.jsx';
import ScalpelHandle from './components/CatagoriesPages/Type/SurgicalInstruments/ScalpelHandle.jsx';
import OtherInstruments from './components/CatagoriesPages/Type/SurgicalInstruments/OtherInstruments.jsx';
import OBGYN from './components/CatagoriesPages/Type/SurgicalInstruments/OBGYN.jsx';
import TrachealRetractors from './components/CatagoriesPages/Type/SurgicalInstruments/TrachealRetractors.jsx';
import RectalSpeculum from './components/CatagoriesPages/Type/SurgicalInstruments/RectalSpeculum.jsx';
import AbdominalRetractors from './components/CatagoriesPages/Type/SurgicalInstruments/AbdominalRetractors.jsx';
import VolkmanRetractor from './components/CatagoriesPages/Type/SurgicalInstruments/VolkmanRetractor.jsx';
import GeneralUseRetractors from './components/CatagoriesPages/Type/SurgicalInstruments/GeneralUseRetractors.jsx';
import MouthGags from './components/CatagoriesPages/Type/SurgicalInstruments/MouthGags.jsx';
import SelfRetainingRetractors from './components/CatagoriesPages/Type/SurgicalInstruments/SelfRetainingRetractors.jsx';
import ENTInstruments from './components/CatagoriesPages/Type/SurgicalInstruments/ENTInstruments.jsx';
import SuctionTube from './components/CatagoriesPages/Type/SurgicalInstruments/SuctionTube.jsx';
import SurgicalCannula from './components/CatagoriesPages/Type/SurgicalInstruments/SurgicalCannula.jsx';
import NueroInstruments from './components/CatagoriesPages/Type/SurgicalInstruments/NueroInstruments.jsx';
import CardiothoracicInstruments from './components/CatagoriesPages/Type/SurgicalInstruments/CardiothoracicInstruments.jsx';
import OphthalmicInstruments from './components/CatagoriesPages/Type/SurgicalInstruments/OphthalmicInstruments.jsx';
import Burnishers from './components/CatagoriesPages/Type/DentalInstruments/Burnishers.jsx';
import Carvers from './components/CatagoriesPages/Type/DentalInstruments/Carvers.jsx';
import CementSpatulas from './components/CatagoriesPages/Type/DentalInstruments/CementSpatulas.jsx';
import Chisels from './components/CatagoriesPages/Type/DentalInstruments/Chisels.jsx';
import CollegePliers from './components/CatagoriesPages/Type/DentalInstruments/CollegePliers.jsx';
import CordPackers from './components/CatagoriesPages/Type/DentalInstruments/CordPackers.jsx';
import Curettes from './components/CatagoriesPages/Type/DentalInstruments/Curettes.jsx';
import DentalInstrumentKits from './components/CatagoriesPages/Type/DentalInstruments/DentalInstrumentKits.jsx';
import Dissectors from './components/CatagoriesPages/Type/DentalInstruments/Dissectors.jsx';
import Elevators from './components/CatagoriesPages/Type/DentalInstruments/Elevators.jsx';
import DentalExtractionForceps from './components/CatagoriesPages/Type/DentalInstruments/DentalExtractionForceps.jsx';
import OrthodonticsInstruments from './components/CatagoriesPages/Type/DentalInstruments/OrthodonticsInstruments.jsx';
import WaxPlacers from './components/CatagoriesPages/Type/DentalInstruments/WaxPlacers.jsx';
import GeneralDentistry from './components/CatagoriesPages/Type/DentalInstruments/GeneralDentistry.jsx';
import DentalCaliper from './components/CatagoriesPages/Type/DentalInstruments/DentalCaliper.jsx';
import Syringes from './components/CatagoriesPages/Type/DentalInstruments/Syringes.jsx';
import LaparoscopicGraspers from './components/CatagoriesPages/Type/LaparoscopyInstruments/LaparoscopicGraspers.jsx';
import LaparoscopicMorcellator from './components/CatagoriesPages/Type/LaparoscopyInstruments/LaparoscopicMorcellator.jsx';
import LaparoscopicBipolarForceps from './components/CatagoriesPages/Type/LaparoscopyInstruments/LaparoscopicBipolarForceps.jsx';
import LaparoscopicNeedleHolders from './components/CatagoriesPages/Type/LaparoscopyInstruments/LaparoscopicNeedleHolders.jsx';
import LaparoscopicTrocarCannula from './components/CatagoriesPages/Type/LaparoscopyInstruments/LaparoscopicTrocarCannula.jsx';
import LaparoscopicClipApplicator from './components/CatagoriesPages/Type/LaparoscopyInstruments/LaparoscopicClipApplicator.jsx';
import LaparoscopicScissors from './components/CatagoriesPages/Type/LaparoscopyInstruments/LaparoscopicScissors.jsx';
import LaparoscopicRetractors from './components/CatagoriesPages/Type/LaparoscopyInstruments/LaparoscopicRetractors.jsx';
import LaparoscopicVeressNeedle from './components/CatagoriesPages/Type/LaparoscopyInstruments/LaparoscopicVeressNeedle.jsx';
import LaparoscopicDissectors from './components/CatagoriesPages/Type/LaparoscopyInstruments/LaparoscopicDissectors.jsx';
import LaparoscopicCables from './components/CatagoriesPages/Type/LaparoscopyInstruments/LaparoscopicCables.jsx';
import LaparoscopicUterineManipulator from './components/CatagoriesPages/Type/LaparoscopyInstruments/LaparoscopicUterineManipulator.jsx';
import LaparoscopicStoneHoldingForceps from './components/CatagoriesPages/Type/LaparoscopyInstruments/LaparoscopicStoneHoldingForceps.jsx';
import LaparoscopicKnotPushers from './components/CatagoriesPages/Type/LaparoscopyInstruments/LaparoscopicKnotPushers.jsx';
import LaparoscopicReducers from './components/CatagoriesPages/Type/LaparoscopyInstruments/LaparoscopicReducers.jsx';
import LaparoscopicVesselSealerClamps from './components/CatagoriesPages/Type/LaparoscopyInstruments/LaparoscopicVesselSealerClamps.jsx';
import LaparoscopicGynaeInstruments from './components/CatagoriesPages/Type/LaparoscopyInstruments/LaparoscopicGynaeInstruments.jsx';
import OtherLaparoscopicInstruments from './components/CatagoriesPages/Type/LaparoscopyInstruments/OtherLaparoscopicInstruments.jsx';
import BoneDrillAndAccessories from './components/CatagoriesPages/Type/OrthopedicInstruments/BoneDrillAndAccessories.jsx';
import OrthopedicBoneOsteotomes from './components/CatagoriesPages/Type/OrthopedicInstruments/OrthopedicBoneOsteotomes.jsx';
import PeriostealElevator from './components/CatagoriesPages/Type/OrthopedicInstruments/PeriostealElevator.jsx';
import PlateBender from './components/CatagoriesPages/Type/OrthopedicInstruments/PlateBender.jsx';
import ScrewDriver from './components/CatagoriesPages/Type/OrthopedicInstruments/ScrewDriver.jsx';
import SterilizationTubes from './components/CatagoriesPages/Type/OrthopedicInstruments/SterilizationTubes.jsx';
import BoneNibbler from './components/CatagoriesPages/Type/OrthopedicInstruments/BoneNibbler.jsx';
import Reamer from './components/CatagoriesPages/Type/OrthopedicInstruments/Reamer.jsx';
import ScissorsAndShears from './components/CatagoriesPages/Type/OrthopedicInstruments/ScissorsAndShears.jsx';
import Retractors from './components/CatagoriesPages/Type/OrthopedicInstruments/Retractors.jsx';
import BoneCuttingForceps from './components/CatagoriesPages/Type/OrthopedicInstruments/BoneCuttingForceps.jsx';
import BoneHammer from './components/CatagoriesPages/Type/OrthopedicInstruments/BoneHammer.jsx';
import BoneHoldingForcepsClamp from './components/CatagoriesPages/Type/OrthopedicInstruments/BoneHoldingForcepsClamp.jsx';
import BoneLevers from './components/CatagoriesPages/Type/OrthopedicInstruments/BoneLevers.jsx';
import BoneChisel from './components/CatagoriesPages/Type/OrthopedicInstruments/BoneChisel.jsx';
import PowerTools from './components/CatagoriesPages/Type/OrthopedicInstruments/PowerTools.jsx';
import PremiumOrthopedicInstrumentSets from './components/CatagoriesPages/Type/OrthopedicInstruments/PremiumOrthopedicInstrumentSets.jsx';
import OrthopedicInstrumentSets from './components/CatagoriesPages/Type/OrthopedicInstruments/OrthopedicInstrumentSets.jsx';
import GeneralOrthopedicInstruments from './components/CatagoriesPages/Type/OrthopedicInstruments/GeneralOrthopedicInstruments.jsx';
import ManualHospitalBed from './components/CatagoriesPages/Type/HospitalFurniture/ManualHospitalBed.jsx';
import ElectricHospitalBed from './components/CatagoriesPages/Type/HospitalFurniture/ElectricHospitalBed.jsx';
import OrthopedicTractionBed from './components/CatagoriesPages/Type/HospitalFurniture/OrthopedicTractionBed.jsx';
import PediatricHospitalBed from './components/CatagoriesPages/Type/HospitalFurniture/PediatricHospitalBed.jsx';
import AttendantBed from './components/CatagoriesPages/Type/HospitalFurniture/AttendantBed.jsx';
import HospitalWardFurniture from './components/CatagoriesPages/Type/HospitalFurniture/HospitalWardFurniture.jsx';
import BloodDonorCouchChairs from './components/CatagoriesPages/Type/HospitalFurniture/BloodDonorCouchChairs.jsx';
import Stretchers from './components/CatagoriesPages/Type/HospitalFurniture/Stretchers.jsx';
import HospitalTrolleys from './components/CatagoriesPages/Type/HospitalFurniture/HospitalTrolleys.jsx';
import ExaminationDeliveryTables from './components/CatagoriesPages/Type/HospitalFurniture/ExaminationDeliveryTables.jsx';
import Wheelchairs from './components/CatagoriesPages/Type/HospitalFurniture/Wheelchairs.jsx';
import KidneyTray from './components/CatagoriesPages/Type/HospitalHolloware/KidneyTray.jsx';
import InstrumentTray from './components/CatagoriesPages/Type/HospitalHolloware/InstrumentTray.jsx';
import CatheterInstrumentTray from './components/CatagoriesPages/Type/HospitalHolloware/CatheterInstrumentTray.jsx';
import BedPanAndUrinal from './components/CatagoriesPages/Type/HospitalHolloware/BedPanAndUrinal.jsx';
import DoucheCan from './components/CatagoriesPages/Type/HospitalHolloware/DoucheCan.jsx';
import BowlBasin from './components/CatagoriesPages/Type/HospitalHolloware/BowlBasin.jsx';
import DressingDrum from './components/CatagoriesPages/Type/HospitalHolloware/DressingDrum.jsx';
import ThermometerForcepsJar from './components/CatagoriesPages/Type/HospitalHolloware/ThermometerForcepsJar.jsx';
import FeedingCup from './components/CatagoriesPages/Type/HospitalHolloware/FeedingCup.jsx';
import Gallipot from './components/CatagoriesPages/Type/HospitalHolloware/Gallipot.jsx';
import SputumMug from './components/CatagoriesPages/Type/HospitalHolloware/SputumMug.jsx';
import DressingJar from './components/CatagoriesPages/Type/HospitalHolloware/DressingJar.jsx';
import Bucket from './components/CatagoriesPages/Type/HospitalHolloware/Bucket.jsx';
import WasteBin from './components/CatagoriesPages/Type/HospitalHolloware/WasteBin.jsx';
import CidexTray from './components/CatagoriesPages/Type/HospitalHolloware/CidexTray.jsx';
import WireMeshSurgicalInstrumentTray from './components/CatagoriesPages/Type/HospitalHolloware/WireMeshSurgicalInstrumentTray.jsx';
import SharpContainerForHospitals from './components/CatagoriesPages/Type/HospitalWasteManagementProducts/SharpContainerForHospitals.jsx';
import ManualNeedleDestroyer from './components/CatagoriesPages/Type/HospitalWasteManagementProducts/ManualNeedleDestroyer.jsx';
import CardboardSafetyBoxes from './components/CatagoriesPages/Type/HospitalWasteManagementProducts/CardboardSafetyBoxes.jsx';
import WasteBins from './components/CatagoriesPages/Type/HospitalWasteManagementProducts/WasteBins.jsx';
import WasteSegregationTrolleysSS from './components/CatagoriesPages/Type/HospitalWasteManagementProducts/WasteSegregationTrolleysSS.jsx';
import WasteSegregationTrolleysMS from './components/CatagoriesPages/Type/HospitalWasteManagementProducts/WasteSegregationTrolleysMS.jsx';
import WringerMoppingTrolleys from './components/CatagoriesPages/Type/HospitalWasteManagementProducts/WringerMoppingTrolleys.jsx';
import LiquidWasteTreatmentSystem from './components/CatagoriesPages/Type/HospitalWasteManagementProducts/LiquidWasteTreatmentSystem.jsx';
import LinenTrolley from './components/CatagoriesPages/Type/HospitalWasteManagementProducts/LinenTrolley.jsx';
import UtilityTrolley from './components/CatagoriesPages/Type/HospitalWasteManagementProducts/UtilityTrolley.jsx';
import FumigatorFogger from './components/CatagoriesPages/Type/MiscellaneousMedicalProducts/FumigatorFogger.jsx';
import EmergencyBlankets from './components/CatagoriesPages/Type/MiscellaneousMedicalProducts/EmergencyBlankets.jsx';
import PneumaticTourniquet from './components/CatagoriesPages/Type/MiscellaneousMedicalProducts/PneumaticTourniquet.jsx';
import BedsoreMattress from './components/CatagoriesPages/Type/MiscellaneousMedicalProducts/BedsoreMattress.jsx';
import PHTestStrips from './components/CatagoriesPages/Type/MiscellaneousMedicalProducts/PHTestStrips.jsx';
import PHBuffer from './components/CatagoriesPages/Type/MiscellaneousMedicalProducts/PHBuffer.jsx';
import OxygenConcentrator from './components/CatagoriesPages/Type/MiscellaneousMedicalProducts/OxygenConcentrator.jsx';
import ExaminationLamp from './components/CatagoriesPages/Type/MiscellaneousMedicalProducts/ExaminationLamp.jsx';
import MedicalBrushes from './components/CatagoriesPages/Type/MiscellaneousMedicalProducts/MedicalBrushes.jsx';
import KeroseneStoveHurricaneLanternPetromax from './components/CatagoriesPages/Type/MiscellaneousMedicalProducts/KeroseneStoveHurricaneLanternPetromax.jsx';
import TimerAndStopWatch from './components/CatagoriesPages/Type/MiscellaneousMedicalProducts/TimerAndStopWatch.jsx';
import PlasticLabBeakers from './components/CatagoriesPages/Type/LaboratoryPlasticware/PlasticLabBeakers.jsx';
import PlasticLabBottles from './components/CatagoriesPages/Type/LaboratoryPlasticware/PlasticLabBottles.jsx';
import PlasticStopcocksConnectors from './components/CatagoriesPages/Type/LaboratoryPlasticware/PlasticStopcocksConnectors.jsx';
import PlasticFunnelsHolders from './components/CatagoriesPages/Type/LaboratoryPlasticware/PlasticFunnelsHolders.jsx';
import PlasticPetriDishes from './components/CatagoriesPages/Type/LaboratoryPlasticware/PlasticPetriDishes.jsx';
import SlideStorageBoxesAndAccessories from './components/CatagoriesPages/Type/LaboratoryPlasticware/SlideStorageBoxesAndAccessories.jsx';
import PlasticCentrifugeTube from './components/CatagoriesPages/Type/LaboratoryPlasticware/PlasticCentrifugeTube.jsx';
import PlasticLabContainers from './components/CatagoriesPages/Type/LaboratoryPlasticware/PlasticLabContainers.jsx';
import PlasticLabVials from './components/CatagoriesPages/Type/LaboratoryPlasticware/PlasticLabVials.jsx';
import PlasticMeasuringCylinders from './components/CatagoriesPages/Type/LaboratoryPlasticware/PlasticMeasuringCylinders.jsx';
import PlasticMeasuringJugs from './components/CatagoriesPages/Type/LaboratoryPlasticware/PlasticMeasuringJugs.jsx';
import ConicalMeasures from './components/CatagoriesPages/Type/LaboratoryPlasticware/ConicalMeasures.jsx';
import PlasticAtomicModels from './components/CatagoriesPages/Type/LaboratoryPlasticware/PlasticAtomicModels.jsx';
import PipetteAccessories from './components/CatagoriesPages/Type/LaboratoryPlasticware/PipetteAccessories.jsx';
import MicrocentrifugeTubes from './components/CatagoriesPages/Type/LaboratoryPlasticware/MicrocentrifugeTubes.jsx';
import MicropipetteAccessories from './components/CatagoriesPages/Type/LaboratoryPlasticware/MicropipetteAccessories.jsx';
import RacksStands from './components/CatagoriesPages/Type/LaboratoryPlasticware/RacksStands.jsx';
import GeneralLabware from './components/CatagoriesPages/Type/LaboratoryPlasticware/GeneralLabware.jsx';
import VacuumExtractorSetsManual from './components/CatagoriesPages/Type/ObstetricsGynaecology/VacuumExtractorSetsManual.jsx';
import ElectricVacuumExtractorSet from './components/CatagoriesPages/Type/ObstetricsGynaecology/ElectricVacuumExtractorSet.jsx';
import VaginalSpeculum from './components/CatagoriesPages/Type/ObstetricsGynaecology/VaginalSpeculum.jsx';
import GynecologicalAspirationKitMVAKit from './components/CatagoriesPages/Type/ObstetricsGynaecology/GynecologicalAspirationKitMVAKit.jsx';
import VaginalPessary from './components/CatagoriesPages/Type/ObstetricsGynaecology/VaginalPessary.jsx';
import LatexGynecologicalGloves from './components/CatagoriesPages/Type/ObstetricsGynaecology/LatexGynecologicalGloves.jsx';
import UmbilicalCordClamp from './components/CatagoriesPages/Type/ObstetricsGynaecology/UmbilicalCordClamp.jsx';
import MidwiferyCase from './components/CatagoriesPages/Type/ObstetricsGynaecology/MidwiferyCase.jsx';
import BreastPumps from './components/CatagoriesPages/Type/ObstetricsGynaecology/BreastPumps.jsx';
import SuctionUnitsElectric from './components/CatagoriesPages/Type/SuctionMachinesUnits/SuctionUnitsElectric.jsx';
import PortableSuctionMachine from './components/CatagoriesPages/Type/SuctionMachinesUnits/PortableSuctionMachine.jsx';
import ElectricCumManualSuctionUnits from './components/CatagoriesPages/Type/SuctionMachinesUnits/ElectricCumManualSuctionUnits.jsx';
import SuctionUnitsManual from './components/CatagoriesPages/Type/SuctionMachinesUnits/SuctionUnitsManual.jsx';
import EnemaKits from './components/CatagoriesPages/Type/HealthYogaProducts/EnemaKits.jsx';
import NetiPot from './components/CatagoriesPages/Type/HealthYogaProducts/NetiPot.jsx';
import NetiSalt from './components/CatagoriesPages/Type/HealthYogaProducts/NetiSalt.jsx';
import EpsomSalt from './components/CatagoriesPages/Type/HealthYogaProducts/EpsomSalt.jsx';
import SitzBathTub from './components/CatagoriesPages/Type/HealthYogaProducts/SitzBathTub.jsx';
import EnemaSyringeDoucheBulb from './components/CatagoriesPages/Type/HealthYogaProducts/EnemaSyringeDoucheBulb.jsx';
import EnemaAccessories from './components/CatagoriesPages/Type/HealthYogaProducts/EnemaAccessories.jsx';
import OTLights from './components/CatagoriesPages/Type/OTEquipment/OTLights.jsx';
import OTTables from './components/CatagoriesPages/Type/OTEquipment/OTTables.jsx';
import ExaminationLights from './components/CatagoriesPages/Type/OTEquipment/ExaminationLights.jsx';
import ElectrosurgicalUnitAndAccessories from './components/CatagoriesPages/Type/OTEquipment/ElectrosurgicalUnitAndAccessories.jsx';
import InfantRadiantWarmer from './components/CatagoriesPages/Type/InfantCareEquipment/InfantRadiantWarmer.jsx';
import InfantIncubators from './components/CatagoriesPages/Type/InfantCareEquipment/InfantIncubators.jsx';
import ResuscitationUnit from './components/CatagoriesPages/Type/InfantCareEquipment/ResuscitationUnit.jsx';
import OxygenHoodsAccessories from './components/CatagoriesPages/Type/InfantCareEquipment/OxygenHoodsAccessories.jsx';
import PhototherapyUnit from './components/CatagoriesPages/Type/InfantCareEquipment/PhototherapyUnit.jsx';
import AirCushionInvalidAirRings from './components/CatagoriesPages/Type/MedicalRubberProducts/AirCushionInvalidAirRings.jsx';
import EnemaSyringes from './components/CatagoriesPages/Type/MedicalRubberProducts/EnemaSyringes.jsx';
import RubberDrainageSheet from './components/CatagoriesPages/Type/MedicalRubberProducts/RubberDrainageSheet.jsx';
import ChloroformBellow from './components/CatagoriesPages/Type/MedicalRubberProducts/ChloroformBellow.jsx';
import EyeEarUlcerSyringe from './components/CatagoriesPages/Type/MedicalRubberProducts/EyeEarUlcerSyringe.jsx';
import InfantRectalSyringe from './components/CatagoriesPages/Type/MedicalRubberProducts/InfantRectalSyringe.jsx';
import VaginalDoucheSpray from './components/CatagoriesPages/Type/MedicalRubberProducts/VaginalDoucheSpray.jsx';
import StomachPumpTube from './components/CatagoriesPages/Type/MedicalRubberProducts/StomachPumpTube.jsx';
import MackintoshSheet from './components/CatagoriesPages/Type/MedicalRubberProducts/MackintoshSheet.jsx';
import DoucheBag from './components/CatagoriesPages/Type/MedicalRubberProducts/DoucheBag.jsx';
import HotWaterBottles from './components/CatagoriesPages/Type/MedicalRubberProducts/HotWaterBottles.jsx';
import Tourniquet from './components/CatagoriesPages/Type/MedicalRubberProducts/Tourniquet.jsx';
import KellySPad from './components/CatagoriesPages/Type/MedicalRubberProducts/KellySPad.jsx';
import PessaryRubberRing from './components/CatagoriesPages/Type/MedicalRubberProducts/PessaryRubberRing.jsx';
import NasalAspirator from './components/CatagoriesPages/Type/MedicalRubberProducts/NasalAspirator.jsx';
import PipetteBulb from './components/CatagoriesPages/Type/MedicalRubberProducts/PipetteBulb.jsx';
import BreastPump from './components/CatagoriesPages/Type/MedicalRubberProducts/BreastPump.jsx';
import CervicalSplints from './components/CatagoriesPages/Type/OrthopaedicAidsRehabProducts/CervicalSplints.jsx';
import BackSplints from './components/CatagoriesPages/Type/OrthopaedicAidsRehabProducts/BackSplints.jsx';
import AbdominalSplint from './components/CatagoriesPages/Type/OrthopaedicAidsRehabProducts/AbdominalSplint.jsx';
import WristElbowSplints from './components/CatagoriesPages/Type/OrthopaedicAidsRehabProducts/WristElbowSplints.jsx';
import KneeCalfAnkleSplints from './components/CatagoriesPages/Type/OrthopaedicAidsRehabProducts/KneeCalfAnkleSplints.jsx';
import CervicalTractionKit from './components/CatagoriesPages/Type/OrthopaedicAidsRehabProducts/CervicalTractionKit.jsx';
import PelvicTractionKit from './components/CatagoriesPages/Type/OrthopaedicAidsRehabProducts/PelvicTractionKit.jsx';
import FractureAids from './components/CatagoriesPages/Type/OrthopaedicAidsRehabProducts/FractureAids.jsx';
import GeneralAids from './components/CatagoriesPages/Type/OrthopaedicAidsRehabProducts/GeneralAids.jsx';
import WalkingSticksOrWalkingCanes from './components/CatagoriesPages/Type/OrthopaedicAidsRehabProducts/WalkingSticksOrWalkingCanes.jsx';
import Walkers from './components/CatagoriesPages/Type/OrthopaedicAidsRehabProducts/Walkers.jsx';
import UnderarmCrutches from './components/CatagoriesPages/Type/OrthopaedicAidsRehabProducts/UnderarmCrutches.jsx';
import PatientLiftingAid from './components/CatagoriesPages/Type/OrthopaedicAidsRehabProducts/PatientLiftingAid.jsx';
import Microscopes from './components/CatagoriesPages/Type/LaboratoryEquipments/Microscopes.jsx';
import Centrifuge from './components/CatagoriesPages/Type/LaboratoryEquipments/Centrifuge.jsx';
import WaterBath from './components/CatagoriesPages/Type/LaboratoryEquipments/WaterBath.jsx';
import HotPlates from './components/CatagoriesPages/Type/LaboratoryEquipments/HotPlates.jsx';
import HotAirSterilizersOrHotAirOvens from './components/CatagoriesPages/Type/LaboratoryEquipments/HotAirSterilizersOrHotAirOvens.jsx';
import LaboratoryIncubators from './components/CatagoriesPages/Type/LaboratoryEquipments/LaboratoryIncubators.jsx';
import BloodCellCounter from './components/CatagoriesPages/Type/LaboratoryEquipments/BloodCellCounter.jsx';
import Anesthesia from './components/CatagoriesPages/Type/MedicalDisposable/Anesthesia.jsx';
import Transfusion from './components/CatagoriesPages/Type/MedicalDisposable/Transfusion.jsx';
import UrologyCare from './components/CatagoriesPages/Type/MedicalDisposable/UrologyCare.jsx';
import GastroCare from './components/CatagoriesPages/Type/MedicalDisposable/GastroCare.jsx';
import Miscellaneous from './components/CatagoriesPages/Type/MedicalDisposable/Miscellaneous.jsx';
import CardiacCare from './components/CatagoriesPages/Type/MedicalDisposable/CardiacCare.jsx';
import Surgery from './components/CatagoriesPages/Type/MedicalDisposable/Surgery.jsx';
import PatientCare from './components/CatagoriesPages/Type/MedicalDisposable/PatientCare.jsx';
import SlimmingEquipments from './components/CatagoriesPages/Type/PhysiotherapyProducts/SlimmingEquipments.jsx';
import SurgicalEquipments from './components/CatagoriesPages/Type/PhysiotherapyProducts/SurgicalEquipments.jsx';
import DehydratedCultureMedia from './components/CatagoriesPages/Type/LaboratoryReagentsFineChemicals/DehydratedCultureMedia.jsx';
import DisposableSurgicalGown from './components/CatagoriesPages/Type/DisposableMedicalApparelDrapes/DisposableSurgicalGown.jsx';
import DisposableSurgicalScrubs from './components/CatagoriesPages/Type/DisposableMedicalApparelDrapes/DisposableSurgicalScrubs.jsx';
import DisposableBeardMask from './components/CatagoriesPages/Type/DisposableMedicalApparelDrapes/DisposableBeardMask.jsx';
import DisposableFaceMask from './components/CatagoriesPages/Type/DisposableMedicalApparelDrapes/DisposableFaceMask.jsx';
import DisposableCap from './components/CatagoriesPages/Type/DisposableMedicalApparelDrapes/DisposableCap.jsx';
import DisposableGloves from './components/CatagoriesPages/Type/DisposableMedicalApparelDrapes/DisposableGloves.jsx';
import DisposableShoeCovers from './components/CatagoriesPages/Type/DisposableMedicalApparelDrapes/DisposableShoeCovers.jsx';
import HospitalAprons from './components/CatagoriesPages/Type/DisposableMedicalApparelDrapes/HospitalAprons.jsx';

import { CartProvider } from './context/CartContext.jsx';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen selection:bg-cyan-500 selection:text-black flex flex-col">
        
        {/* Navigation - Har page par fixed rahega */}
        <header className="fixed top-0 w-full z-50 bg-white shadow-md">
          <TopBar />
          <Navbar />
          <CategoryNav />
        </header>

        <main className="flex-grow pt-44"> 
          <Routes>
            {/* 1. HOME PAGE - Isme sidebar nahi dikhega (Full Width) */}
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            
            {/* Admin Routes */}
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            
            {/* 2. SIDEBAR PAGES - In sab routes par Sidebar constant rahega */}
            <Route element={<CategoryLayout />}>
              <Route path="/aboutus" element={<About />} />
              <Route path="/diagnostic-equipments" element={<Digno />} />
              <Route path="/scrubs-linens" element={<Surb />} />
              <Route path="/products" element={<Products />} />
              <Route path="/quality" element={<Quality />} />
              <Route path="/enquiry" element={<Enquiry />} />
              <Route path="/warranty" element={<Warranty />} />
              <Route path="/exhibition" element={<Exhibitions />} />
              <Route path="/contactus" element={<Contact />} />
              <Route path="/enquiry-cart" element={<Cart />} />
              {/* Added Category Routes */}
              <Route path="/anaesthesia" element={<Anaesthesia />} />
              <Route path="/medical-apparel" element={<Apparel />} />
              <Route path="/autoclave" element={<Autoclave />} />
              <Route path="/cold-chain" element={<Coldchain />} />
              <Route path="/dental-instruments" element={<Dental />} />
              <Route path="/hospital-furniture" element={<Furniture />} />
              <Route path="/gynaecology" element={<Gynaecology />} />
              <Route path="/scales" element={<Height />} />
              <Route path="/holloware" element={<Holloware />} />
              <Route path="/infant-care" element={<Infantcare />} />
              <Route path="/lab-coat" element={<Labcoat />} />
              <Route path="/lab-equipments" element={<Laboratory />} />
              <Route path="/laparoscopy" element={<Laporoscopy />} />
              <Route path="/miscellaneous" element={<Miscelineous />} />
              <Route path="/ot-equipment" element={<OTequipment />} />
              <Route path="/orthopedic-instruments" element={<Orthopedic />} />
              <Route path="/physiotherapy" element={<Phisiotherapy />} />
              <Route path="/lab-plasticware" element={<Plasticware />} />
              <Route path="/lab-reagents" element={<Reagents />} />
              <Route path="/rubber-products" element={<Rubber />} />
              <Route path="/suction-machines" element={<Suction />} />
              <Route path="/surgical-instruments" element={<Surgical />} />
              <Route path="/waste-management" element={<Waste />} />
              <Route path="/xray-supplies" element={<Xray />} />
              <Route path="/health-yoga" element={<Yoga />} />
              <Route path="/medical-disposable" element={<Medical />} />
              <Route path="/rehab-products" element={<OrthopaedicAids />} />
              <Route path="/stethoscopes" element={<Stethoscopes />} />
              <Route path="/laryngoscopes" element={<Laryngoscopes />} />
              <Route path="/bp-monitors-sphygmomanometers" element={<BPMonitorsSphygmomanometers />} />
              <Route path="/medical-reflex-hammers" element={<MedicalReflexHammers />} />
              <Route path="/ecg-machine-ecg-paper-rolls" element={<ECGMachineECGPaperRolls />} />
              <Route path="/pen-flashlight" element={<PenFlashlight />} />
              <Route path="/fetal-doppler-monitor" element={<FetalDopplerMonitor />} />
              <Route path="/patient-monitor" element={<PatientMonitor />} />
              <Route path="/pulse-oximeter" element={<PulseOximeter />} />
              <Route path="/nebulizers" element={<Nebulizers />} />
              <Route path="/peak-flow-meter" element={<PeakFlowMeter />} />
              <Route path="/aerosol-spacer" element={<AerosolSpacer />} />
              <Route path="/tongue-depressors" element={<TongueDepressors />} />
              <Route path="/otoscopes" element={<Otoscopes />} />
              <Route path="/ophthalmology-instruments" element={<OphthalmologyInstruments />} />
              <Route path="/tuning-fork" element={<TuningFork />} />
              <Route path="/podiatry-products" element={<PodiatryProducts />} />
              <Route path="/goniometer" element={<Goniometer />} />
              <Route path="/thermometers" element={<Thermometers />} />
              <Route path="/glucometer" element={<Glucometer />} />
              <Route path="/hospital-scrubs" element={<HospitalScrubs />} />
              <Route path="/surgeon-patient-gown" element={<SurgeonPatientGown />} />
              <Route path="/hospital-uniforms-dresses" element={<HospitalUniformsDresses />} />
              <Route path="/hospital-bed-sheets" element={<HospitalBedSheets />} />
              <Route path="/patient-identification-wristbands" element={<PatientIdentificationWristbands />} />
              <Route path="/medical-drape-sheets" element={<MedicalDrapeSheets />} />
              <Route path="/pillow-pillow-cover" element={<PillowPillowCover />} />
              <Route path="/operation-theatre-towels" element={<OperationTheatreTowels />} />
              <Route path="/female-lab-coat-28" element={<FemaleLabCoat28 />} />
              <Route path="/female-lab-coat-32" element={<FemaleLabCoat32 />} />
              <Route path="/female-lab-coat-35" element={<FemaleLabCoat35 />} />
              <Route path="/female-lab-coat-37" element={<FemaleLabCoat37 />} />
              <Route path="/unisex-lab-coat-30" element={<UnisexLabCoat30 />} />
              <Route path="/unisex-lab-coat-34" element={<UnisexLabCoat34 />} />
              <Route path="/unisex-lab-coat-37" element={<UnisexLabCoat37 />} />
              <Route path="/unisex-lab-coat-41" element={<UnisexLabCoat41 />} />
              <Route path="/lead-aprons" element={<LeadAprons />} />
              <Route path="/thyroid-collar-shield" element={<ThyroidCollarShield />} />
              <Route path="/gonad-ovarian-shields" element={<GonadOvarianShields />} />
              <Route path="/radiation-protection-head-shield" element={<RadiationProtectionHeadShield />} />
              <Route path="/breast-protector" element={<BreastProtector />} />
              <Route path="/lead-gloves" element={<LeadGloves />} />
              <Route path="/lead-goggles" element={<LeadGoggles />} />
              <Route path="/x-ray-view-box" element={<XRayViewBox />} />
              <Route path="/lead-apron-racks-hangers" element={<LeadApronRacksHangers />} />
              <Route path="/mobile-lead-barrier" element={<MobileLeadBarrier />} />
              <Route path="/x-ray-hangers" element={<XRayHangers />} />
              <Route path="/x-ray-cassettes" element={<XRayCassettes />} />
              <Route path="/manual-artificial-resuscitators" element={<ManualArtificialResuscitators />} />
              <Route path="/breathing-circuit" element={<BreathingCircuit />} />
              <Route path="/laryngoscope" element={<Laryngoscope />} />
              <Route path="/emergency-first-aid-kit" element={<EmergencyFIRSTAIDKit />} />
              <Route path="/anesthesia-machine" element={<AnesthesiaMachine />} />
              <Route path="/anaesthesia-face-masks" element={<AnaesthesiaFaceMasks />} />
              <Route path="/cpr-mask" element={<CPRMask />} />
              <Route path="/disposable-face-masks" element={<DisposableFaceMasks />} />
              <Route path="/guedel-airways" element={<GuedelAirways />} />
              <Route path="/mouth-opener" element={<MouthOpener />} />
              <Route path="/niv-non-vented-mask" element={<NIVNonVentedMask />} />
              <Route path="/cpap-bipap-mask" element={<CPAPBIPAPMask />} />
              <Route path="/head-harness" element={<HeadHarness />} />
              <Route path="/rebreathing-bags" element={<RebreathingBags />} />
              <Route path="/airways-system" element={<AirwaysSystem />} />
              <Route path="/reusable-circuit" element={<ReusableCircuit />} />
              <Route path="/high-flow-nasal-cannula" element={<HighFlowNasalCannula />} />
              <Route path="/ventilator-circuit" element={<VentilatorCircuit />} />
              <Route path="/general-products" element={<GeneralProducts />} />
              <Route path="/combo-circuit" element={<ComboCircuit />} />
              <Route path="/portable-autoclaves" element={<PortableAutoclaves />} />
              <Route path="/vertical-autoclaves" element={<VerticalAutoclaves />} />
              <Route path="/horizontal-autoclaves" element={<HorizontalAutoclaves />} />
              <Route path="/dental-autoclaves" element={<DentalAutoclaves />} />
              <Route path="/tattoo-autoclaves" element={<TattooAutoclaves />} />
              <Route path="/ultraviolet-chamber" element={<UltravioletChamber />} />
              <Route path="/instrument-sterilizer" element={<InstrumentSterilizer />} />
              <Route path="/formalin-chamber" element={<FormalinChamber />} />
              <Route path="/dressing-drums" element={<DressingDrums />} />
              <Route path="/cidex-trays" element={<CidexTrays />} />
              <Route path="/sterilization-cassette" element={<SterilizationCassette />} />
              <Route path="/autoclave-accessories" element={<AutoclaveAccessories />} />
              <Route path="/stadiometer-height-measuring-scale" element={<StadiometerHeightMeasuringScale />} />
              <Route path="/measuring-tape" element={<MeasuringTape />} />
              <Route path="/infantometer" element={<Infantometer />} />
              <Route path="/personal-weighing-scale" element={<PersonalWeighingScale />} />
              <Route path="/baby-weighing-scales" element={<BabyWeighingScales />} />
              <Route path="/stature-meter" element={<StatureMeter />} />
              <Route path="/vaccine-carrier-box" element={<VaccineCarrierBox />} />
              <Route path="/cold-box" element={<ColdBox />} />
              <Route path="/ice-pack" element={<IcePack />} />
              <Route path="/instrument-kit" element={<InstrumentKit />} />
              <Route path="/surgical-forceps" element={<SurgicalForceps />} />
              <Route path="/general-dissecting-forceps" element={<GeneralDissectingForceps />} />
              <Route path="/surgical-scissors" element={<SurgicalScissors />} />
              <Route path="/scalpel-handle" element={<ScalpelHandle />} />
              <Route path="/other-instruments" element={<OtherInstruments />} />
              <Route path="/ob-gyn" element={<OBGYN />} />
              <Route path="/tracheal-retractors" element={<TrachealRetractors />} />
              <Route path="/rectal-speculum" element={<RectalSpeculum />} />
              <Route path="/abdominal-retractors" element={<AbdominalRetractors />} />
              <Route path="/volkman-retractor" element={<VolkmanRetractor />} />
              <Route path="/general-use-retractors" element={<GeneralUseRetractors />} />
              <Route path="/mouth-gags" element={<MouthGags />} />
              <Route path="/self-retaining-retractors" element={<SelfRetainingRetractors />} />
              <Route path="/ent-instruments" element={<ENTInstruments />} />
              <Route path="/suction-tube" element={<SuctionTube />} />
              <Route path="/surgical-cannula" element={<SurgicalCannula />} />
              <Route path="/nuero-instruments" element={<NueroInstruments />} />
              <Route path="/cardiothoracic-instruments" element={<CardiothoracicInstruments />} />
              <Route path="/ophthalmic-instruments" element={<OphthalmicInstruments />} />
              <Route path="/burnishers" element={<Burnishers />} />
              <Route path="/carvers" element={<Carvers />} />
              <Route path="/cement-spatulas" element={<CementSpatulas />} />
              <Route path="/chisels" element={<Chisels />} />
              <Route path="/college-pliers" element={<CollegePliers />} />
              <Route path="/cord-packers" element={<CordPackers />} />
              <Route path="/curettes" element={<Curettes />} />
              <Route path="/dental-instrument-kits" element={<DentalInstrumentKits />} />
              <Route path="/dissectors" element={<Dissectors />} />
              <Route path="/elevators" element={<Elevators />} />
              <Route path="/dental-extraction-forceps" element={<DentalExtractionForceps />} />
              <Route path="/orthodontics-instruments" element={<OrthodonticsInstruments />} />
              <Route path="/wax-placers" element={<WaxPlacers />} />
              <Route path="/general-dentistry" element={<GeneralDentistry />} />
              <Route path="/dental-caliper" element={<DentalCaliper />} />
              <Route path="/syringes" element={<Syringes />} />
              <Route path="/laparoscopic-graspers" element={<LaparoscopicGraspers />} />
              <Route path="/laparoscopic-morcellator" element={<LaparoscopicMorcellator />} />
              <Route path="/laparoscopic-bipolar-forceps" element={<LaparoscopicBipolarForceps />} />
              <Route path="/laparoscopic-needle-holders" element={<LaparoscopicNeedleHolders />} />
              <Route path="/laparoscopic-trocar-cannula" element={<LaparoscopicTrocarCannula />} />
              <Route path="/laparoscopic-clip-applicator" element={<LaparoscopicClipApplicator />} />
              <Route path="/laparoscopic-scissors" element={<LaparoscopicScissors />} />
              <Route path="/laparoscopic-retractors" element={<LaparoscopicRetractors />} />
              <Route path="/laparoscopic-veress-needle" element={<LaparoscopicVeressNeedle />} />
              <Route path="/laparoscopic-dissectors" element={<LaparoscopicDissectors />} />
              <Route path="/laparoscopic-cables" element={<LaparoscopicCables />} />
              <Route path="/laparoscopic-uterine-manipulator" element={<LaparoscopicUterineManipulator />} />
              <Route path="/laparoscopic-stone-holding-forceps" element={<LaparoscopicStoneHoldingForceps />} />
              <Route path="/laparoscopic-knot-pushers" element={<LaparoscopicKnotPushers />} />
              <Route path="/laparoscopic-reducers" element={<LaparoscopicReducers />} />
              <Route path="/laparoscopic-vessel-sealer-clamps" element={<LaparoscopicVesselSealerClamps />} />
              <Route path="/laparoscopic-gynae-instruments" element={<LaparoscopicGynaeInstruments />} />
              <Route path="/other-laparoscopic-instruments" element={<OtherLaparoscopicInstruments />} />
              <Route path="/bone-drill-and-accessories" element={<BoneDrillAndAccessories />} />
              <Route path="/orthopedic-bone-osteotomes" element={<OrthopedicBoneOsteotomes />} />
              <Route path="/periosteal-elevator" element={<PeriostealElevator />} />
              <Route path="/plate-bender" element={<PlateBender />} />
              <Route path="/screw-driver" element={<ScrewDriver />} />
              <Route path="/sterilization-tubes" element={<SterilizationTubes />} />
              <Route path="/bone-nibbler" element={<BoneNibbler />} />
              <Route path="/reamer" element={<Reamer />} />
              <Route path="/scissors-and-shears" element={<ScissorsAndShears />} />
              <Route path="/retractors" element={<Retractors />} />
              <Route path="/bone-cutting-forceps" element={<BoneCuttingForceps />} />
              <Route path="/bone-hammer" element={<BoneHammer />} />
              <Route path="/bone-holding-forceps-clamp" element={<BoneHoldingForcepsClamp />} />
              <Route path="/bone-levers" element={<BoneLevers />} />
              <Route path="/bone-chisel" element={<BoneChisel />} />
              <Route path="/power-tools" element={<PowerTools />} />
              <Route path="/premium-orthopedic-instrument-sets" element={<PremiumOrthopedicInstrumentSets />} />
              <Route path="/orthopedic-instrument-sets" element={<OrthopedicInstrumentSets />} />
              <Route path="/general-orthopedic-instruments" element={<GeneralOrthopedicInstruments />} />
              <Route path="/manual-hospital-bed" element={<ManualHospitalBed />} />
              <Route path="/electric-hospital-bed" element={<ElectricHospitalBed />} />
              <Route path="/orthopedic-traction-bed" element={<OrthopedicTractionBed />} />
              <Route path="/pediatric-hospital-bed" element={<PediatricHospitalBed />} />
              <Route path="/attendant-bed" element={<AttendantBed />} />
              <Route path="/hospital-ward-furniture" element={<HospitalWardFurniture />} />
              <Route path="/blood-donor-couch-chairs" element={<BloodDonorCouchChairs />} />
              <Route path="/stretchers" element={<Stretchers />} />
              <Route path="/hospital-trolleys" element={<HospitalTrolleys />} />
              <Route path="/examination-delivery-tables" element={<ExaminationDeliveryTables />} />
              <Route path="/wheelchairs" element={<Wheelchairs />} />
              <Route path="/kidney-tray" element={<KidneyTray />} />
              <Route path="/instrument-tray" element={<InstrumentTray />} />
              <Route path="/catheter-instrument-tray" element={<CatheterInstrumentTray />} />
              <Route path="/bed-pan-and-urinal" element={<BedPanAndUrinal />} />
              <Route path="/douche-can" element={<DoucheCan />} />
              <Route path="/bowl-basin" element={<BowlBasin />} />
              <Route path="/dressing-drum" element={<DressingDrum />} />
              <Route path="/thermometer-forceps-jar" element={<ThermometerForcepsJar />} />
              <Route path="/feeding-cup" element={<FeedingCup />} />
              <Route path="/gallipot" element={<Gallipot />} />
              <Route path="/sputum-mug" element={<SputumMug />} />
              <Route path="/dressing-jar" element={<DressingJar />} />
              <Route path="/bucket" element={<Bucket />} />
              <Route path="/waste-bin" element={<WasteBin />} />
              <Route path="/cidex-tray" element={<CidexTray />} />
              <Route path="/wire-mesh-surgical-instrument-tray" element={<WireMeshSurgicalInstrumentTray />} />
              <Route path="/sharp-container-for-hospitals" element={<SharpContainerForHospitals />} />
              <Route path="/manual-needle-destroyer" element={<ManualNeedleDestroyer />} />
              <Route path="/cardboard-safety-boxes" element={<CardboardSafetyBoxes />} />
              <Route path="/waste-bins" element={<WasteBins />} />
              <Route path="/waste-segregation-trolleys-ss" element={<WasteSegregationTrolleysSS />} />
              <Route path="/waste-segregation-trolleys-ms" element={<WasteSegregationTrolleysMS />} />
              <Route path="/wringer-mopping-trolleys" element={<WringerMoppingTrolleys />} />
              <Route path="/liquid-waste-treatment-system" element={<LiquidWasteTreatmentSystem />} />
              <Route path="/linen-trolley" element={<LinenTrolley />} />
              <Route path="/utility-trolley" element={<UtilityTrolley />} />
              <Route path="/fumigator-fogger" element={<FumigatorFogger />} />
              <Route path="/emergency-blankets" element={<EmergencyBlankets />} />
              <Route path="/pneumatic-tourniquet" element={<PneumaticTourniquet />} />
              <Route path="/bedsore-mattress" element={<BedsoreMattress />} />
              <Route path="/ph-test-strips" element={<PHTestStrips />} />
              <Route path="/ph-buffer" element={<PHBuffer />} />
              <Route path="/oxygen-concentrator" element={<OxygenConcentrator />} />
              <Route path="/examination-lamp" element={<ExaminationLamp />} />
              <Route path="/medical-brushes" element={<MedicalBrushes />} />
              <Route path="/kerosene-stove-hurricane-lantern-petromax" element={<KeroseneStoveHurricaneLanternPetromax />} />
              <Route path="/timer-and-stop-watch" element={<TimerAndStopWatch />} />
              <Route path="/plastic-lab-beakers" element={<PlasticLabBeakers />} />
              <Route path="/plastic-lab-bottles" element={<PlasticLabBottles />} />
              <Route path="/plastic-stopcocks-connectors" element={<PlasticStopcocksConnectors />} />
              <Route path="/plastic-funnels-holders" element={<PlasticFunnelsHolders />} />
              <Route path="/plastic-petri-dishes" element={<PlasticPetriDishes />} />
              <Route path="/slide-storage-boxes-and-accessories" element={<SlideStorageBoxesAndAccessories />} />
              <Route path="/plastic-centrifuge-tube" element={<PlasticCentrifugeTube />} />
              <Route path="/plastic-lab-containers" element={<PlasticLabContainers />} />
              <Route path="/plastic-lab-vials" element={<PlasticLabVials />} />
              <Route path="/plastic-measuring-cylinders" element={<PlasticMeasuringCylinders />} />
              <Route path="/plastic-measuring-jugs" element={<PlasticMeasuringJugs />} />
              <Route path="/conical-measures" element={<ConicalMeasures />} />
              <Route path="/plastic-atomic-models" element={<PlasticAtomicModels />} />
              <Route path="/pipette-accessories" element={<PipetteAccessories />} />
              <Route path="/microcentrifuge-tubes" element={<MicrocentrifugeTubes />} />
              <Route path="/micropipette-accessories" element={<MicropipetteAccessories />} />
              <Route path="/racks-stands" element={<RacksStands />} />
              <Route path="/general-labware" element={<GeneralLabware />} />
              <Route path="/vacuum-extractor-sets-manual" element={<VacuumExtractorSetsManual />} />
              <Route path="/electric-vacuum-extractor-set" element={<ElectricVacuumExtractorSet />} />
              <Route path="/vaginal-speculum" element={<VaginalSpeculum />} />
              <Route path="/gynecological-aspiration-kit-mva-kit" element={<GynecologicalAspirationKitMVAKit />} />
              <Route path="/vaginal-pessary" element={<VaginalPessary />} />
              <Route path="/latex-gynecological-gloves" element={<LatexGynecologicalGloves />} />
              <Route path="/umbilical-cord-clamp" element={<UmbilicalCordClamp />} />
              <Route path="/midwifery-case" element={<MidwiferyCase />} />
              <Route path="/breast-pumps" element={<BreastPumps />} />
              <Route path="/suction-units-electric" element={<SuctionUnitsElectric />} />
              <Route path="/portable-suction-machine" element={<PortableSuctionMachine />} />
              <Route path="/electric-cum-manual-suction-units" element={<ElectricCumManualSuctionUnits />} />
              <Route path="/suction-units-manual" element={<SuctionUnitsManual />} />
              <Route path="/enema-kits" element={<EnemaKits />} />
              <Route path="/neti-pot" element={<NetiPot />} />
              <Route path="/neti-salt" element={<NetiSalt />} />
              <Route path="/epsom-salt" element={<EpsomSalt />} />
              <Route path="/sitz-bath-tub" element={<SitzBathTub />} />
              <Route path="/enema-syringe-douche-bulb" element={<EnemaSyringeDoucheBulb />} />
              <Route path="/enema-accessories" element={<EnemaAccessories />} />
              <Route path="/ot-lights" element={<OTLights />} />
              <Route path="/ot-tables" element={<OTTables />} />
              <Route path="/examination-lights" element={<ExaminationLights />} />
              <Route path="/electrosurgical-unit-and-accessories" element={<ElectrosurgicalUnitAndAccessories />} />
              <Route path="/infant-radiant-warmer" element={<InfantRadiantWarmer />} />
              <Route path="/infant-incubators" element={<InfantIncubators />} />
              <Route path="/resuscitation-unit" element={<ResuscitationUnit />} />
              <Route path="/oxygen-hoods-accessories" element={<OxygenHoodsAccessories />} />
              <Route path="/phototherapy-unit" element={<PhototherapyUnit />} />
              <Route path="/air-cushion-invalid-air-rings" element={<AirCushionInvalidAirRings />} />
              <Route path="/enema-syringes" element={<EnemaSyringes />} />
              <Route path="/rubber-drainage-sheet" element={<RubberDrainageSheet />} />
              <Route path="/chloroform-bellow" element={<ChloroformBellow />} />
              <Route path="/eye-ear-ulcer-syringe" element={<EyeEarUlcerSyringe />} />
              <Route path="/infant-rectal-syringe" element={<InfantRectalSyringe />} />
              <Route path="/vaginal-douche-spray" element={<VaginalDoucheSpray />} />
              <Route path="/stomach-pump-tube" element={<StomachPumpTube />} />
              <Route path="/mackintosh-sheet" element={<MackintoshSheet />} />
              <Route path="/douche-bag" element={<DoucheBag />} />
              <Route path="/hot-water-bottles" element={<HotWaterBottles />} />
              <Route path="/tourniquet" element={<Tourniquet />} />
              <Route path="/kelly-s-pad" element={<KellySPad />} />
              <Route path="/pessary-rubber-ring" element={<PessaryRubberRing />} />
              <Route path="/nasal-aspirator" element={<NasalAspirator />} />
              <Route path="/pipette-bulb" element={<PipetteBulb />} />
              <Route path="/breast-pump" element={<BreastPump />} />
              <Route path="/cervical-splints" element={<CervicalSplints />} />
              <Route path="/back-splints" element={<BackSplints />} />
              <Route path="/abdominal-splint" element={<AbdominalSplint />} />
              <Route path="/wrist-elbow-splints" element={<WristElbowSplints />} />
              <Route path="/knee-calf-ankle-splints" element={<KneeCalfAnkleSplints />} />
              <Route path="/cervical-traction-kit" element={<CervicalTractionKit />} />
              <Route path="/pelvic-traction-kit" element={<PelvicTractionKit />} />
              <Route path="/fracture-aids" element={<FractureAids />} />
              <Route path="/general-aids" element={<GeneralAids />} />
              <Route path="/walking-sticks-or-walking-canes" element={<WalkingSticksOrWalkingCanes />} />
              <Route path="/walkers" element={<Walkers />} />
              <Route path="/underarm-crutches" element={<UnderarmCrutches />} />
              <Route path="/patient-lifting-aid" element={<PatientLiftingAid />} />
              <Route path="/microscopes" element={<Microscopes />} />
              <Route path="/centrifuge" element={<Centrifuge />} />
              <Route path="/water-bath" element={<WaterBath />} />
              <Route path="/hot-plates" element={<HotPlates />} />
              <Route path="/hot-air-sterilizers-or-hot-air-ovens" element={<HotAirSterilizersOrHotAirOvens />} />
              <Route path="/laboratory-incubators" element={<LaboratoryIncubators />} />
              <Route path="/blood-cell-counter" element={<BloodCellCounter />} />
              <Route path="/anesthesia" element={<Anesthesia />} />
              <Route path="/transfusion" element={<Transfusion />} />
              <Route path="/urology-care" element={<UrologyCare />} />
              <Route path="/gastro-care" element={<GastroCare />} />
              <Route path="/miscellaneous" element={<Miscellaneous />} />
              <Route path="/cardiac-care" element={<CardiacCare />} />
              <Route path="/surgery" element={<Surgery />} />
              <Route path="/patient-care" element={<PatientCare />} />
              <Route path="/slimming-equipments" element={<SlimmingEquipments />} />
              <Route path="/surgical-equipments" element={<SurgicalEquipments />} />
              <Route path="/dehydrated-culture-media" element={<DehydratedCultureMedia />} />
              <Route path="/disposable-surgical-gown" element={<DisposableSurgicalGown />} />
              <Route path="/disposable-surgical-scrubs" element={<DisposableSurgicalScrubs />} />
              <Route path="/disposable-beard-mask" element={<DisposableBeardMask />} />
              <Route path="/disposable-face-mask" element={<DisposableFaceMask />} />
              <Route path="/disposable-cap" element={<DisposableCap />} />
              <Route path="/disposable-gloves" element={<DisposableGloves />} />
              <Route path="/disposable-shoe-covers" element={<DisposableShoeCovers />} />
              <Route path="/hospital-aprons" element={<HospitalAprons />} />
            </Route>



            {/* 3. OTHER PAGES */}
            <Route path="/contactus" element={<Contact />} />
            <Route path="*" element={<div className="text-center py-20 text-2xl font-bold">404 - Page Not Found</div>} />
          </Routes>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
    </CartProvider>
  );
};

export default App;