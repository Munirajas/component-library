import React from 'react';
export type StepStatus = 'completed' | 'current' | 'upcoming';
export type StepOrientation = 'horizontal' | 'vertical';
export interface StepDefinition {
    id: string;
    title: React.ReactNode;
    description?: React.ReactNode;
    status?: StepStatus;
    optional?: boolean;
    disabled?: boolean;
    assistiveText?: React.ReactNode;
}
export interface StepperProps {
    steps: StepDefinition[];
    currentStepId?: string;
    currentIndex?: number;
    orientation?: StepOrientation;
    showStepNumbers?: boolean;
    onStepClick?: (step: StepDefinition, index: number) => void;
    interactive?: boolean;
    className?: string;
    compact?: boolean;
}
export declare const Stepper: React.FC<StepperProps>;
export default Stepper;
//# sourceMappingURL=Stepper.d.ts.map