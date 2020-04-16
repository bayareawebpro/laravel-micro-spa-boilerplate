<?php

namespace Tests;

use Facebook\WebDriver\Chrome\ChromeOptions;
use Facebook\WebDriver\Remote\DesiredCapabilities;
use Facebook\WebDriver\Remote\RemoteWebDriver;
use Laravel\Dusk\TestCase as BaseTestCase;

abstract class DuskTestCase extends BaseTestCase
{
    use CreatesApplication;

    /**
     * Prepare for Dusk test execution.
     * @beforeClass
     * @return void
     */
    public static function prepare()
    {
        static::startChromeDriver();
    }

    /**
     * Create the RemoteWebDriver instance.
     * @return \Facebook\WebDriver\Remote\RemoteWebDriver
     */
    protected function driver()
    {

        $options = (new ChromeOptions)->addArguments([
            '--headless',
            '--no-sandbox',
            '--disable-gpu',
            '--detach=true',
            '--disable-dev-shm-usage',
            '--window-size=1600,1200',
            '--remote-debugging-port=9222',
        ]);

        return RemoteWebDriver::create(
            'http://localhost:9515', DesiredCapabilities::chrome()->setCapability(
                ChromeOptions::CAPABILITY_W3C, $options
            )
        );
    }
}
