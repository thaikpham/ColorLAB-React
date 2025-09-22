import { TutorialGuide } from "./tutorial-guide";

const steps = [
  {
    title: "Set Up Your Camera with the Recipe",
    description: "First, input all the parameters from this recipe into your camera, including White Balance (WB) and all Picture Profile settings."
  },
  {
    title: "Access the Save Settings Menu",
    description: "Press the MENU button, navigate to the Shooting tab (pink) → Shooting Mode → Camera Set. Memory."
  },
  {
    title: "Choose a Memory Slot",
    description: "Select one of the memory slots you want to save to (e.g., 1 or M1) and press the Enter button to confirm. Your settings are now saved!"
  },
  {
    title: "Recall the Saved Setting",
    description: "To use the preset, simply turn the top mode dial to the corresponding number 1, 2, or 3. The camera will instantly apply all your saved settings."
  }
];
export function CameraRecipeGuide() {
  return (
    <TutorialGuide
      title="Save Recipe to Camera"
      subtitle="Using the Camera Setting Memory feature on Alpha cameras with the new menu."
      steps={steps}
      className="mx-auto"
    />
  );
}
