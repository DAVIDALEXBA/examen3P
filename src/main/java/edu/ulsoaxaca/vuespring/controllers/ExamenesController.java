package edu.ulsoaxaca.vuespring.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import edu.ulsoaxaca.vuespring.mappers.MateriaMapper;
import edu.ulsoaxaca.vuespring.model.Examen;
import edu.ulsoaxaca.vuespring.model.Materia;

@RequestMapping("/examen")
@RestController
public class ExamenesController {

	@Autowired
	private MateriaMapper materiaMapper;
	
	@GetMapping("/todos")
	public List<Materia> todos()
	{
		return materiaMapper.findAll();
	}
	@PostMapping("/nuevo")
	public List<Materia> nuevo(@RequestParam("nombre") String nombre)
	{
		materiaMapper.insert(nombre);
		return materiaMapper.findAll();
	}
	
	@PostMapping("/ver")
	public List<Examen> ver(@RequestParam("id") String id)
	{
		
		return materiaMapper.findAllbyId(id);
	}
	
	@PostMapping("/insertExamen")
	public void insert(@RequestParam("id_materia") String id_materia, @RequestParam("preguntas") String preguntas)
	{
		
		materiaMapper.insertExamen(id_materia, preguntas);
	}
	
}
