package com.example.ecommercespringreactjs.controller.api.az;

import com.example.ecommercespringreactjs.dto.user.User;
import com.example.ecommercespringreactjs.dto.user.UserId;
import com.example.ecommercespringreactjs.repository.database.user.UserEntity;
import com.example.ecommercespringreactjs.service.user.UserUseCaseService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("v2/users")
@RequiredArgsConstructor
public class UsersController {

    private final UserUseCaseService userUseCaseService;

    @GetMapping
    public String listUsers(Model model) {
        model.addAttribute("users", userUseCaseService.findAll(""));
        return "user/User";
    }

    @GetMapping("/add")
    public String showAddForm(Model model) {
        model.addAttribute("user", new UserEntity());
        return "user/Form-AddUser";
    }

    @PostMapping("/add")
    public String saveUser(@ModelAttribute("user") User user) {
        userUseCaseService.createUser(user);
        return "redirect:/v2/users";
    }

    @GetMapping("/edit/{id}")
    public String showUpdateForm(@PathVariable("id") UserId id, Model model) {
        User user = userUseCaseService.findById(id);
        model.addAttribute("user", user);
        return "user/Form-EditUser";
    }

    @PostMapping("/update/{id}")
    public String updateUser(@PathVariable("id") String id, @ModelAttribute("user") User user) {
        userUseCaseService.updateUser(id, user);
        return "redirect:/v2/users";
    }

    @GetMapping("/details/{id}")
    public String showDetails(@PathVariable("id") UserId id, Model model) {
        User user = userUseCaseService.findById(id);
        model.addAttribute("user", user);
        return "user/User-Details";
    }

    @GetMapping("/delete/{id}")
    public String deleteUser(@PathVariable("id") String id) {
        userUseCaseService.deleteUser(id);
        return "redirect:/v2/users";
    }
    @GetMapping("/login")
    public String showLoginForm() {
        return "Login";
    }
}