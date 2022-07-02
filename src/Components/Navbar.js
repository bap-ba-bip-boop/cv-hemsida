import React from 'react'
import { NavButton } from './Nav Components/NavButton';
import appSettings from '../Settings/Components/Navbar.json';

export const Navbar = props => {

  return (
    <nav>
        <NavButton
          buttonAction = {props.buttonAction}
          buttonText = {appSettings.SummaryText}
          redirectPage = {props.SummaryPage}
        />
        <NavButton
          buttonAction = {props.buttonAction}
          buttonText = {appSettings.SkillsText}
          redirectPage = {props.SkillsPage}
        />
        <NavButton
          buttonAction = {props.buttonAction}
          buttonText = {appSettings.WorkplaceText}
          redirectPage = {props.WorkplacesPage}
        />
        <NavButton
          buttonAction = {props.buttonAction}
          buttonText = {appSettings.EducationText}
          redirectPage = {props.EducationPage}
        />
    </nav>
  )
}
