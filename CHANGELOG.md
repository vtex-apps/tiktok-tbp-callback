# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.5.2] - 2022-02-23

### Changed

- Increase TTL and timeout

## [0.5.1] - 2022-02-18

### Changed

- Input `app` in the redirect URL

## [0.5.0] - 2022-02-18

### Changed

- Change redirect URL and increase timeout
- Renamed `salesChannelId` to `tradePolicyId`

### Fixed

- Params were not being resolved correctly

## [0.4.0] - 2022-01-10

### Added

- Health endpoint to avoid timeout errors
- Health route documentation to README

## [0.3.0] - 2022-01-07

### Added

- Middleware for redirecting to the proper account
- Increase timeout to 2 seconds

## [0.2.0] - 2022-01-05

### Added

- Middleware for parsing AuthCode and state params

## [0.1.0] - 2022-01-04

### Added

- Redirect endpoint to receive TikTok's redirect

### Changed

- README documentation

## [0.0.1] - 2021-12-28

### Added

- Initial commit
