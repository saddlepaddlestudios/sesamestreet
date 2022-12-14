import { faOtter, faStopwatch } from '@fortawesome/free-solid-svg-icons';
import { action } from '@storybook/addon-actions';
import { ComponentMeta } from '@storybook/react';
import { Button } from 'design-system';
import {
    BUTTON_SIZE_OPTIONS,
    BUTTON_VARIANT_OPTIONS,
} from 'design-system/components/Button/Button';

export default {
    title: 'Design System/Button',
    component: Button,
} as ComponentMeta<typeof Button>;

export const Default = () => <Button onClick={action('Clicked button')}>Sample text</Button>;

export const AllButtons = () => (
    <div className='flex flex-col items-start justify-center space-y-3 p-2'>
        {BUTTON_VARIANT_OPTIONS.map((variant) => (
            <div key={variant} className='flex items-center justify-center space-x-3'>
                {BUTTON_SIZE_OPTIONS.map((size) => (
                    <>
                        <Button
                            key={`${size} ${variant}`}
                            size={size}
                            variant={variant}
                            onClick={action('Clicked Button')}
                        >
                            Sample
                        </Button>
                        <Button
                            key={`${size} ${variant} disabled`}
                            size={size}
                            variant={variant}
                            onClick={action('Clicked Button')}
                            disabled
                        >
                            Disabled
                        </Button>
                    </>
                ))}
            </div>
        ))}
    </div>
);

export const IconLeft = () => (
    <div className='flex flex-col items-start justify-center space-y-3 p-2'>
        {BUTTON_SIZE_OPTIONS.map((size) => (
            <div key={size} className='flex items-center justify-center space-x-3'>
                {BUTTON_VARIANT_OPTIONS.map((variant) => (
                    <>
                        <Button
                            key={`${size} ${variant}`}
                            size={size}
                            variant={variant}
                            icon={faOtter}
                            onClick={action('Clicked Button')}
                        >
                            Sample
                        </Button>
                        <Button
                            key={`${size} ${variant} disabled`}
                            size={size}
                            variant={variant}
                            icon={faOtter}
                            onClick={action('Clicked Button')}
                            disabled
                        >
                            Disabled
                        </Button>
                    </>
                ))}
            </div>
        ))}
    </div>
);

export const IconRight = () => (
    <div className='flex flex-col items-start justify-center space-y-3 p-2'>
        {BUTTON_SIZE_OPTIONS.map((size) => (
            <div key={size} className='flex items-center justify-center space-x-3'>
                {BUTTON_VARIANT_OPTIONS.map((variant) => (
                    <>
                        <Button
                            key={`${size} ${variant}`}
                            size={size}
                            variant={variant}
                            icon={faStopwatch}
                            onClick={action('Clicked Button')}
                        >
                            Sample
                        </Button>
                        <Button
                            key={`${size} ${variant} disabled`}
                            size={size}
                            variant={variant}
                            icon={faStopwatch}
                            onClick={action('Clicked Button')}
                            disabled
                        >
                            Disabled
                        </Button>
                    </>
                ))}
            </div>
        ))}
    </div>
);
