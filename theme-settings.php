<?php

/**
 * @file
 * Theme settings file for nics_unity_theme.
 */

use Drupal\Core\Form\FormStateInterface;

/**
 * Implements hook_form_system_theme_settings_alter().
 */
function nics_unity_theme_form_system_theme_settings_alter(&$form, FormStateInterface $form_state, $form_id = NULL) {
  // Work-around for a core bug affecting admin themes. See issue #943212.
  if (isset($form_id)) {
    return;
  }

  // Settings to disable Google Analytics tracking.
  if (\Drupal::moduleHandler()->moduleExists('google_analytics')) {

    $ga_account = \Drupal::config('google_analytics.settings')->get('account');

    if (!empty($ga_account)) {

      $form['ga_tracking_options'] = [
        '#type' => 'details',
        '#title' => t('Google Analytics tracking'),
        '#open' => TRUE,
      ];

      $form['ga_tracking_options']['ga_tracking_disabled'] = [
        '#type' => 'checkbox',
        '#title' => t('Disable Google Analytics tracking'),
        '#default_value' => theme_get_setting('ga_tracking_disabled'),
      ];

      $form['ga_tracking_options']['ga_tracking_disabled_eu'] = [
        '#type' => 'checkbox',
        '#title' => t('Only disable if EU Cookie Compliance consent is not given'),
        '#default_value' => theme_get_setting('ga_tracking_disabled_eu'),
      ];

      // Prevent the setting of the EU Cookie Compliance option if that module
      // is not installed.
      if (\Drupal::moduleHandler()->moduleExists('eu_cookie_compliance') === FALSE) {
        $form['ga_tracking_options']['ga_tracking_disabled_eu']['#disabled'] = TRUE;
        $form['ga_tracking_options']['ga_tracking_disabled_eu']['#default_value'] = FALSE;
        $form['ga_tracking_options']['ga_tracking_disabled_eu']['#title'] .= t(' (EU Cookie Compliance module is NOT installed)');
      }
    }
  }

  $form['social_links'] = [
    '#type' => 'details',
    '#title' => t('Social media links'),
    '#open' => TRUE,
  ];

  $form['social_links']['twitter_profile_url'] = [
    '#type' => 'textfield',
    '#title' => t('Twitter URL'),
    '#default_value' => theme_get_setting('twitter_profile_url'),
    '#description' => t("Enter your Twitter profile URL."),
  ];
  $form['social_links']['facebook_profile_url'] = [
    '#type' => 'textfield',
    '#title' => t('Facebook URL'),
    '#default_value' => theme_get_setting('facebook_profile_url'),
    '#description' => t("Enter your Facebook profile URL."),
  ];
  $form['social_links']['linkedin_profile_url'] = [
    '#type' => 'textfield',
    '#title' => t('Linkedin URL'),
    '#default_value' => theme_get_setting('linkedin_profile_url'),
    '#description' => t("Enter your Linkedin profile URL."),
  ];
  $form['social_links']['pinterest_profile_url'] = [
    '#type' => 'textfield',
    '#title' => t('Pinterest URL'),
    '#default_value' => theme_get_setting('pinterest_profile_url'),
    '#description' => t("Enter your Linkedin Pinterest URL."),
  ];
  $form['social_links']['youtube_profile_url'] = [
    '#type' => 'textfield',
    '#title' => t('Youtube URL'),
    '#default_value' => theme_get_setting('youtube_profile_url'),
    '#description' => t("Enter your Youtube profile URL."),
  ];
  $form['social_links']['instagram_profile_url'] = [
    '#type' => 'textfield',
    '#title' => t('Instagram URL'),
    '#default_value' => theme_get_setting('instagram_profile_url'),
    '#description' => t("Enter your Instagram profile URL."),
  ];
}
